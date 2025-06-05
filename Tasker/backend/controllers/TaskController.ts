import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import * as app from '../app';


export const getAllTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const alltask = await models.tasks.findAll();
        res.status(200).json(alltask);
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

export const deleteTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await models.tasks.destroy({
            where: {
                Id_task: req.params.id_task
            }
        });

        res.status(201).json({
            error: false,
            message: "Task cancellato!"
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

export const addTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tDiven = await app.sequelizeDiven.transaction();
    const tTasker = await app.sequelizeTasker.transaction();
    try {
        let commessa = await models.commesse.findOne({
            where: { id_commessa: req.body.id_commessa },
            transaction: tDiven
        });
        if (!commessa) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: 'Commessa non trovata'
            });
            return;
        }

        await models.tasks.create({
            Task_name: req.body.Task_name,
            id_commessa: req.body.id_commessa,
            Task_description: req.body.Task_description,
            Task_creation: req.body.Task_creation,
            color: req.body.color,
        }, { transaction: tTasker });

        await tDiven.commit();
        await tTasker.commit();//non è garantita la consistenza dei dati se il commit fallisce dopo il commit di tDiven

        res.status(201).json({
            error: false,
            message: "Task inserito"
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