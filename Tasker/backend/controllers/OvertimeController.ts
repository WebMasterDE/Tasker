import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";


export const InsertHour = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const overtime = await models.overtime.create({
            Hours: req.body.Hours,
            Date: req.body.Date,
            Id_user: req.body.Id_user,
            Id_hour: req.body.Id_hour
        });

        res.status(201).json({
            error: false,
            message: "Straordinario inserito correttamente!"
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


export const getOvertimeByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const overtime = await models.overtime.findAll({
            where: {
                Id_user: req.params.id,
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('Date')), req.params.year),
                    Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('Date')), req.params.month)
                ]
            }
        });
        res.status(200).json(overtime);

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

// Va a recuperarsi l'ora di straordinario dall'Id delle ore lavorate.
// componente/i: task-dialog
export const getOvertimeByHourId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const overtime = await models.overtime.findOne({
            where: {
                Id_hour: req.params.idHour,
            }
        });

        res.status(200).json(overtime);

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

export const modifyHourOvertime = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.body)
    try {
        const overtime = await models.overtime.update({
            Hours: req.body.Hours,
            Date: req.body.Date
        }, {
            where: {
                Id_hour: req.body.Id_hour
            }
        });

        res.status(201).json({
            error: false,
            message: "Straordinario aggiornato correttamente!"
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