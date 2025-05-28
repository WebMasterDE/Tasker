import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";

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
    try {
        models.tasks.create({
            Task_name: req.body.Task_name,
            id_commessa: req.body.id_commessa,
            Task_description: req.body.Task_description,
            Task_creation: req.body.Task_creation,
            color: req.body.color,
        });

        res.status(201).json({
            error: false,
            message: "Task inserito"
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