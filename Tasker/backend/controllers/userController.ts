import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import * as app from '../app';
import bcrypt from 'bcrypt';



export const getUserbyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await models.users.findOne({ where: { Id_user: req.params.id_user } });
        res.status(200).json(user);
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

export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const users = await models.users.findAll({ attributes: ['Id_User', 'Name', 'Email', 'Authorization'] });
        res.status(200).json(users);
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

export const addUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tDiven = await app.sequelizeDiven.transaction();
    const tTasker = await app.sequelizeTasker.transaction();
    try {
        let user = await models.users.findOne({ where: { Email: req.body.mail }, transaction: tTasker });
        if (user) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: 'User with this email already exists'
            });
            return;
        }

        let operatore = await models.ana_operatori.findOne({
            where: { id_operatore: req.body.id_operatore },
            transaction: tDiven
        });
        if (!operatore) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: 'Operatore not found in DIVEN'
            });
            return;
        }

        if (req.body.authLevel < 1 || req.body.authLevel > 3) {
            await tDiven.rollback();
            await tTasker.rollback();

            res.status(400).json({
                error: true,
                message: 'Invalid authorization level'
            });
            return;
        }

        const hashedpassw = await bcrypt.hash(req.body.password, 12);

        await models.users.create({
            Name: req.body.name,
            Email: req.body.mail,
            Password: hashedpassw,
            Authorization: req.body.authLevel,
            id_operatore: req.body.id_operatore
        }, { transaction: tTasker });

        await tDiven.commit();
        await tTasker.commit();//non è garantita la consistenza dei dati se il commit fallisce dopo il commit di tDiven

        res.status(200).json({
            error: false,
            message: 'User created successfully'
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