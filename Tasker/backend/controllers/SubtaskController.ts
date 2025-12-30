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
            where: {
                status: 'aperto',
            }
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

export const addSubtaskToTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let exists = await models.task_subtask.findOne({
            where: {
                id_task: req.params.id_task,
                id_subtask: req.params.id_subtask,
            },
        });
        if (exists) {
            res.status(400).json({
                error: true,
                message: "Subtask already associated to task",
            });
        } else {
            let task = await models.tasks.findOne({
                where: {
                    Id_task: req.params.id_task,
                },
            });
            if (!task) {
                res.status(400).json({
                    error: true,
                    message: "Task not found",
                });
                return;
            }

            let subtask = await models.subtask.findOne({
                where: {
                    id: req.params.id_subtask,
                },
            });
            if (!subtask) {
                res.status(400).json({
                    error: true,
                    message: "Subtask not found",
                });
                return;
            }


            await models.task_subtask.create({
                id_task: Number(req.params.id_task),
                id_subtask: Number(req.params.id_subtask),
            });

            res.status(201).json({
                error: false,
                message: "Subtask added to task successfully",
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

export const deleteSubtaskFromTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let result = await models.task_subtask.destroy({
            where: {
                id_task: req.params.id_task,
                id_subtask: req.params.id_subtask,
            },
        });
        if (result) {
            res.status(201).json({
                error: false,
                message: "Subtask removed from task successfully",
            });
        } else {
            res.status(400).json({
                error: true,
                message: "Subtask not found in task",
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

export const addSubtask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await models.subtask.create({
            descrizione: req.body.descrizione,
            ore_preventivate: req.body.ore_preventivate,
            data_inizio: req.body.data_inizio,
            data_fine_prevista: req.body.data_fine_prevista,
        });
        res.status(201).json({
            error: false,
            message: "Subtask created successfully",
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

export const getSubtaskById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const subtask = await models.subtask.findOne({
            where: {
                id: req.params.id_subtask,
            },
        });

        res.status(200).json(subtask);
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

export const updateSubtask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let rows = await models.subtask.update({
            descrizione: req.body.descrizione,
            ore_preventivate: req.body.ore_preventivate,
            data_inizio: req.body.data_inizio,
            data_fine_prevista: req.body.data_fine_prevista,
        }, {
            where: {
                id: req.params.id_subtask,
            },
        });
        if (rows) {
            res.status(200).json({
                error: false,
                message: "Subtask updated successfully",
            });
        } else {
            res.status(400).json({
                error: true,
                message: "Subtask not found",
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

export const deleteSubtask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let result = await models.subtask.destroy({
            where: {
                id: req.params.id_subtask,
            },
        });
        if (result) {
            res.status(200).json({
                error: false,
                message: "Subtask deleted successfully",
            });
        } else {
            res.status(400).json({
                error: true,
                message: "Subtask not found",
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