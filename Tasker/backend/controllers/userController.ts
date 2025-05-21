import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import { AuthenticatedRequest } from '../types/types';



export const getUserbyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await models.users.findOne({ where: { Id_user: req.params.id } });
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

