import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";


export const getContractInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const contract = await models.contract_of_employment.findOne({
            where: {
                Id_user: req.params.id,
            }
        });

        res.status(200).json(contract);

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