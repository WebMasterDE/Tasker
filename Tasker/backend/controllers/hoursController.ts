import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import { AuthenticatedRequest } from '../types/types';


export const getallHoursById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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

//TODO
export const addHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
                    }
                });

                if (task) {
                    descrizioneParziale = "-" + task.Task_name + "\n";
                    id_commessa = task.id_commessa;
                } else {
                    res.status(400).json({
                        error: true,
                        message: "Task non trovata"
                    });
                }
            }
        } else {
            const task = await models.tasks.findOne({
                where: {
                    Id_task: req.body.Id_task,
                }
            });

            if (task) {
                descrizioneParziale = "-" + task.Task_name + "\n";
                id_commessa = task.id_commessa;
            } else {
                res.status(400).json({
                    error: true,
                    message: "Task non trovata"
                });
            }
        }

        let descrizioneCompleta = descrizioneParziale +
            "-Codice commit: " + req.body.Commit + "\n" +
            "-Descrizione: " + req.body.Description;


        const user = await models.users.findOne({
            where: {
                Id_user: req.body.Id_user
            }
        });
        if (!user) {
            res.status(400).json({
                error: true,
                message: "Utente non trovato"
            });
        }

        const authReq = req as AuthenticatedRequest;
        const authUser = await models.users.findOne({
            where: {
                Id_user: authReq.auth.id
            }
        });
        if (!authUser?.id_operatore) {
            res.status(400).json({
                error: true,
                message: "Non sei autorizzato ad inserire ore"
            });
        }
        const ADMIN_AUTH = 1;
        if ((authUser?.Authorization != ADMIN_AUTH) && (authUser?.Id_user !== user?.Id_user)) {
            res.status(400).json({
                error: true,
                message: "Non sei autorizzato ad inserire ore per questo utente"
            });
        }


        const timetable = await models.timetable.create({
            id_commessa: id_commessa,
            id_operatore: user!.id_operatore,//is not null
            ore_lavoro: req.body.Hour,
            data_lavoro: req.body.Date,
            operatore_ins: authUser!.id_operatore,//is not null
            note: descrizioneCompleta,
        });

        const hour = await models.hours.create({
            Operator: req.body.Operator,
            Description: req.body.Description,
            Hour: req.body.Hour,
            Date: req.body.Date,
            Commit: req.body.Commit,
            Id_user: req.body.Id_user,
            id_subtask: req.body.id_subtask,
            Id_task: req.body.Id_task,
            id_timetable: timetable.id_timetable
        });

        res.status(201).json({
            error: false,
            message: "Ore inserite correttamente!"
        });
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

//TODO
export const deleteHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let result = await models.hours.destroy({ where: { Id_hour: req.body.Id_hour } });
        if (result === 1) {
            res.status(200).json({ message: 'Record deleted successfully' });
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (err) {
        console.log(err)
    }
}
//TODO
export const updateHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const updHours = await models.hours.update({
            Description: req.body.Description,
            Date: req.body.Date,
            Commit: req.body.Commit,
            Hour: req.body.Hour,
            Id_task: req.body.Id_task,
            id_subtask: req.body.id_subtask
        }, { where: { Id_hour: req.params.idHour } });

        res.status(200).json(updHours);
    } catch (err) {
        console.log(err)
    }
}