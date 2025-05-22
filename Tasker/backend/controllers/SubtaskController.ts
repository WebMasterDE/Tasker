import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";

export const getSubtasksByTaskId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const subtasks = await models.subtask.findAll({
            include: [{
                model: models.task_subtask,
                as: "task_subtasks",
                required: true,
                where: {
                    id_task: req.params.id_task,
                },
            }],
        });

        res.status(200).json(subtasks);

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