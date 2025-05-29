import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import { AuthenticatedRequest } from '../types/types';
import * as utils from '../utils';
import * as app from '../app';



export const getallHoursByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const hours = await models.hours.findAll({
            include: [
                {
                    model: models.tasks,
                    as: 'Id_task_task'
                },
                {
                    model: models.subtask,
                    as: 'id_subtask_subtask'
                }
            ],
            where: { Id_user: req.params.id_user }
        });

        res.status(200).json(hours);
    } catch (err: unknown) {
        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}

export const getallHours = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const Hours = await models.hours.findAll({
            include: [{
                model: models.tasks,
                as: 'Id_task_task'
            }],
        });

        res.status(200).json(Hours);
    } catch (err: unknown) {
        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}

export const getHourById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let hour = await models.hours.findOne({ where: { Id_hour: req.params.id_hour } });
        if (hour) {
            res.status(200).json(hour);
        } else {
            res.status(404).json({
                error: true,
                message: 'Record not found'
            });
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}

export const addHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tDiven = await app.sequelizeDiven.transaction();
    const tTasker = await app.sequelizeTasker.transaction();

    try {
        let descrizioneParziale = "";
        let id_commessa = 0;

        if (req.body.id_subtask) {
            const task_subtask = await models.task_subtask.findOne({
                where: {
                    id_task: req.body.Id_task,
                    id_subtask: req.body.id_subtask,
                },
                include: [{
                    model: models.tasks,
                    as: "id_task_task",
                    required: true,
                }, {
                    model: models.subtask,
                    as: "id_subtask_subtask",
                    required: true,
                }],
                transaction: tTasker
            });

            if (task_subtask) {
                descrizioneParziale = "-" + task_subtask.id_task_task.Task_name + "\n" +
                    "-" + task_subtask.id_subtask_subtask.descrizione + "\n";
                id_commessa = task_subtask.id_task_task.id_commessa;
            } else {
                // gestisco il caso in cui id_subtask è stato passato ma non è presente in task_subtask, questo avviene quando la subtask non è assegnata alla task id_task
                const task = await models.tasks.findOne({
                    where: {
                        Id_task: req.body.Id_task,
                    },
                    transaction: tTasker
                });

                if (task) {
                    descrizioneParziale = "-" + task.Task_name + "\n";
                    id_commessa = task.id_commessa;
                } else {
                    await tDiven.rollback();
                    await tTasker.rollback();

                    res.status(400).json({
                        error: true,
                        message: "Task non trovata"
                    });
                    return;
                }
            }
        } else {
            const task = await models.tasks.findOne({
                where: {
                    Id_task: req.body.Id_task,
                },
                transaction: tTasker
            });

            if (task) {
                descrizioneParziale = "-" + task.Task_name + "\n";
                id_commessa = task.id_commessa;
            } else {
                await tDiven.rollback();
                await tTasker.rollback();

                res.status(400).json({
                    error: true,
                    message: "Task non trovata"
                });
                return;
            }
        }

        let descrizioneCompleta = descrizioneParziale +
            "-Codice commit: " + req.body.Commit + "\n" +
            "-Descrizione: " + req.body.Description;


        const user = await models.users.findOne({
            where: {
                Id_user: req.body.Id_user
            },
            transaction: tTasker
        });
        if (!user) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: "Utente non trovato"
            });
            return;
        }

        const authReq = req as AuthenticatedRequest;
        const authUser = await models.users.findOne({
            where: {
                Id_user: authReq.auth.id
            },
            transaction: tTasker
        });
        if (!authUser?.id_operatore) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: "Non sei autorizzato ad inserire ore"
            });
            return;
        }
        if (!utils.canModify(authReq, req.body.Id_user)) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: "Non sei autorizzato ad inserire ore per questo utente"
            });
            return;
        }


        const timetable = await models.timetable.create({
            id_commessa: id_commessa,
            id_operatore: user!.id_operatore,//is not null
            ore_lavoro: req.body.Hour,
            data_lavoro: req.body.Date,
            operatore_ins: authUser!.id_operatore,//is not null
            note: descrizioneCompleta,
        }, { transaction: tDiven });

        const hour = await models.hours.create({
            Operator: user?.Name,
            Description: req.body.Description,
            Hour: req.body.Hour,
            Date: req.body.Date,
            Commit: req.body.Commit,
            Id_user: req.body.Id_user,
            id_subtask: req.body.id_subtask,
            Id_task: req.body.Id_task,
            id_timetable: timetable.id_timetable
        }, { transaction: tTasker });

        await tDiven.commit();
        await tTasker.commit();//non è garantita la consistenza dei dati se il commit fallisce dopo il commit di tDiven

        res.status(201).json({
            error: false,
            message: "Ore inserite correttamente!"
        });
    } catch (err: unknown) {
        await tDiven.rollback();
        await tTasker.rollback();

        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}

export const getLastId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const lastId = await models.hours.findOne({
            attributes: ['Id_hour'],
            order: [['Id_hour', 'DESC']],
            limit: 1
        })
        if (lastId) {
            res.status(200).json({
                error: false,
                message: "OK",
                id_hour: lastId.Id_hour
            });
        } else {
            res.status(200).json({
                error: false,
                message: "Nessun record trovato",
                id_hour: null
            });
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}

export const deleteHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tDiven = await app.sequelizeDiven.transaction();
    const tTasker = await app.sequelizeTasker.transaction();

    try {
        let hour = await models.hours.findOne({ where: { Id_hour: req.params.id_hour }, transaction: tTasker });
        if (hour) {
            let timetableId = hour.id_timetable;

            const authReq = req as AuthenticatedRequest;
            if (utils.canModify(authReq, hour.Id_user!)) {

                await models.timetable.destroy({ where: { id_timetable: timetableId }, transaction: tDiven });
                await models.hours.destroy({ where: { Id_hour: req.params.id_hour }, transaction: tTasker });

                await tDiven.commit();
                await tTasker.commit();//non è garantita la consistenza dei dati se il commit fallisce dopo il commit di tDiven

                res.status(200).json({
                    error: false,
                    message: 'Record deleted successfully'
                });
            } else {
                await tDiven.rollback();
                await tTasker.rollback();

                res.status(403).json({
                    error: true,
                    message: 'You are not authorized to delete this record'
                });
            }
        } else {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(404).json({
                error: true,
                message: 'Record not found'
            });
        }
    } catch (err: unknown) {
        await tDiven.rollback();
        await tTasker.rollback();

        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}

export const updateHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tDiven = await app.sequelizeDiven.transaction();
    const tTasker = await app.sequelizeTasker.transaction();

    try {
        let hour = await models.hours.findOne({ where: { Id_hour: req.params.id_hour }, transaction: tTasker });
        if (hour) {
            let timetableId = hour.id_timetable;

            const authReq = req as AuthenticatedRequest;
            if (utils.canModify(authReq, hour.Id_user!)) {
                let descrizioneParziale = "";
                let id_commessa = 0;

                if (req.body.id_subtask) {
                    const task_subtask = await models.task_subtask.findOne({
                        where: {
                            id_task: req.body.Id_task,
                            id_subtask: req.body.id_subtask,
                        },
                        include: [{
                            model: models.tasks,
                            as: "id_task_task",
                            required: true,
                        }, {
                            model: models.subtask,
                            as: "id_subtask_subtask",
                            required: true,
                        }],
                        transaction: tTasker
                    });

                    if (task_subtask) {
                        descrizioneParziale = "-" + task_subtask.id_task_task.Task_name + "\n" +
                            "-" + task_subtask.id_subtask_subtask.descrizione + "\n";
                        id_commessa = task_subtask.id_task_task.id_commessa;
                    } else {
                        // gestisco il caso in cui id_subtask è stato passato ma non è presente in task_subtask, questo avviene quando la subtask non è assegnata alla task id_task
                        const task = await models.tasks.findOne({
                            where: {
                                Id_task: req.body.Id_task,
                            },
                            transaction: tTasker
                        });

                        if (task) {
                            descrizioneParziale = "-" + task.Task_name + "\n";
                            id_commessa = task.id_commessa;
                        } else {
                            await tDiven.rollback();
                            await tTasker.rollback();

                            res.status(400).json({
                                error: true,
                                message: "Task non trovata"
                            });
                            return;
                        }
                    }
                } else {
                    const task = await models.tasks.findOne({
                        where: {
                            Id_task: req.body.Id_task,
                        },
                        transaction: tTasker
                    });

                    if (task) {
                        descrizioneParziale = "-" + task.Task_name + "\n";
                        id_commessa = task.id_commessa;
                    } else {
                        await tDiven.rollback();
                        await tTasker.rollback();

                        res.status(400).json({
                            error: true,
                            message: "Task non trovata"
                        });
                        return;
                    }
                }

                let descrizioneCompleta = descrizioneParziale +
                    "-Codice commit: " + req.body.Commit + "\n" +
                    "-Descrizione: " + req.body.Description;


                const user = await models.users.findOne({
                    where: {
                        Id_user: req.body.Id_user
                    },
                    transaction: tTasker
                });
                if (!user) {
                    await tDiven.rollback();
                    await tTasker.rollback();

                    res.status(400).json({
                        error: true,
                        message: "Utente non trovato"
                    });
                    return;
                }

                const authReq = req as AuthenticatedRequest;
                const authUser = await models.users.findOne({
                    where: {
                        Id_user: authReq.auth.id
                    },
                    transaction: tTasker
                });
                if (!authUser?.id_operatore) {
                    await tDiven.rollback();
                    await tTasker.rollback();

                    res.status(400).json({
                        error: true,
                        message: "Non sei autorizzato ad inserire ore"
                    });
                    return;
                }
                if (!utils.canModify(authReq, req.body.Id_user)) {
                    await tDiven.rollback();
                    await tTasker.rollback();

                    res.status(400).json({
                        error: true,
                        message: "Non sei autorizzato ad inserire ore per questo utente"
                    });
                    return;
                }

                const timetable = await models.timetable.update({
                    id_commessa: id_commessa,
                    id_operatore: user!.id_operatore,//is not null
                    ore_lavoro: req.body.Hour,
                    data_lavoro: req.body.Date,
                    operatore_ins: authUser!.id_operatore,//is not null
                    note: descrizioneCompleta,
                }, {
                    where: { id_timetable: timetableId },
                    transaction: tDiven
                });

                const updHours = await models.hours.update({
                    Operator: user?.Name,
                    Description: req.body.Description,
                    Hour: req.body.Hour,
                    Date: req.body.Date,
                    Commit: req.body.Commit,
                    Id_user: req.body.Id_user,
                    id_subtask: req.body.id_subtask,
                    Id_task: req.body.Id_task,
                }, {
                    where: { Id_hour: req.params.id_hour },
                    transaction: tTasker
                });

                await tDiven.commit();
                await tTasker.commit();//non è garantita la consistenza dei dati se il commit fallisce dopo il commit di tDiven

                res.status(200).json({
                    error: false,
                    message: 'Record updated successfully'
                });
            } else {
                await tDiven.rollback();
                await tTasker.rollback();

                res.status(403).json({
                    error: true,
                    message: 'You are not authorized to alter this record'
                });
            }
        } else {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(404).json({
                error: true,
                message: 'Record not found'
            });
        }
    } catch (err: unknown) {
        await tDiven.rollback();
        await tTasker.rollback();

        if (err instanceof Error) {
            next(err);
        } else {
            next({
                message: String(err),
            });
        }
    }
}