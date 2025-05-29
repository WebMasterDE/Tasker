import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import * as utils from '../utils';
import * as app from '../app';
import { AuthenticatedRequest } from '../types/types';

export const createMissingHoursDiven = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tDiven = await app.sequelizeDiven.transaction();
    const tTasker = await app.sequelizeTasker.transaction();

    try {
        const hours = await models.hours.findAll({
            where: { id_timetable: 0 },
            transaction: tTasker
        });

        for (const hour of hours) {
            let descrizioneParziale = "";
            let id_commessa = 0;

            if (hour.id_subtask) {
                const task_subtask = await models.task_subtask.findOne({
                    where: {
                        id_task: hour.Id_task,
                        id_subtask: hour.id_subtask,
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
                            Id_task: hour.Id_task,
                        },
                        transaction: tTasker
                    });

                    if (task) {
                        descrizioneParziale = "-" + task.Task_name + "\n";
                        id_commessa = task.id_commessa;
                    } else {
                        throw new Error("Task non trovata");
                    }
                }
            } else {
                const task = await models.tasks.findOne({
                    where: {
                        Id_task: hour.Id_task,
                    },
                    transaction: tTasker
                });

                if (task) {
                    descrizioneParziale = "-" + task.Task_name + "\n";
                    id_commessa = task.id_commessa;
                } else {
                    throw new Error("Task non trovata");
                }
            }

            let descrizioneCompleta = descrizioneParziale +
                "-Codice commit: " + hour.Commit + "\n" +
                "-Descrizione: " + hour.Description;

            let descrizioneFiltrata = descrizioneCompleta.replace(/[\u{10000}-\u{10FFFF}]/gu, '');


            const user = await models.users.findOne({
                where: {
                    Id_user: hour.Id_user
                },
                transaction: tTasker
            });
            if (!user) {
                throw new Error("Utente non trovato");
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
            }

            const timetable = await models.timetable.create({
                id_commessa: id_commessa,
                id_operatore: user!.id_operatore,//is not null
                ore_lavoro: hour.Hour,
                data_lavoro: hour.Date!,//is not null
                operatore_ins: authUser!.id_operatore,//is not null
                note: descrizioneFiltrata,
            }, { transaction: tDiven });

            const updHours = await models.hours.update({
                id_timetable: timetable.id_timetable,
            }, {
                where: { Id_hour: hour.Id_hour },
                transaction: tTasker
            });
        }

        await tDiven.commit();
        await tTasker.commit();//non è garantita la consistenza dei dati se il commit fallisce dopo il commit di tDiven

        res.status(200).json({
            error: false,
            message: "Missing hours aligned with DIVEN successfully."
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