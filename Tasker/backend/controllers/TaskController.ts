import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";

export const getTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
        const deletesingleTask = await models.tasks.destroy({
            where: {
                Id_task: req.body.Id_task
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
        console.log(req.body)
        models.tasks.create({
            Task_name: req.body.Task_name,
            id_commessa: 0,//TODO
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