import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";

export const insertShift = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("--------------------------------------------", req.body)
    try {
        const shift = await models.shifts.create({
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            hour: req.body.hour,
            Id_user: req.body.Id_user
        });

        res.status(201).json({
            error: false,
            message: "Turno inserito correttamente!"
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

export const getAllShifts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const getshift = await models.shifts.findAll({
            include: [
                {
                    model: models.users,
                    as: 'Id_user_user',
                    attributes: ['Name']
                }
            ]
        });

        res.status(200).json(getshift);

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