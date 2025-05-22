import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";


export const getArchive = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const alltask = await models.archives.findAll({
            where: {
                userIdUser: req.params.id
            }
        })
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
};

export const addTasksToArchive = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log(req.body);
        await models.archives.create({
            Task_name: req.body.Task_name,
            Task_description: req.body.Task_description,
            Task_hours: req.body.Task_hours,
            Task_creation: req.body.Task_creation,
            Task_end: req.body.Task_end,
            userIdUser: req.body.Id_user,
            Id_task: Number(req.params.id)
        });

        res.status(201).json({
            error: false,
            message: "Task archiviata correttamente!"
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
};
