import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AuthenticatedRequest, AppError } from './types/types';
import { expressjwt as jwt } from "express-jwt";
import config from './config';


//------------------------------------------------------------------------------

export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('\x1b[31m%s\x1b[0m', "------------------------------------------------");//red
    console.error(err);
    res.status(err.status || 500).json({
        error: true,
        message: 'Internal Server Error',
    });
};

//------------------------------------------------------------------------------

export const invalidEndpointHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(404).json({
        error: true,
        message: "Invalid endpoint"
    });
};

//------------------------------------------------------------------------------

export const requestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("------------------------------------------------")
    console.log("New request for: " + req.url);
    console.log("Method: " + req.method);
    console.log("Time: " + new Date().toLocaleString());
    next();
};

//------------------------------------------------------------------------------

export const authorize = (authLevel: number): RequestHandler[] => {
    return [
        // authenticate JWT token and attach user to request object (req.auth)
        (req: Request, res: Response, next: NextFunction) => {
            jwt({ secret: config.jwtSecret, algorithms: ['HS256'] })(req, res, (err): void => {
                if (err) {
                    console.error(err);
                    res.status(401).json({
                        error: true,
                        message: 'Token non valido o assente.',
                    });
                } else {
                    next();
                }
            });
        },

        (req: Request, res: Response, next: NextFunction): void => {
            const authReq = req as AuthenticatedRequest;

            console.log("Authorized");
            console.log("  User id: " + authReq.auth.id);
            console.log("  User mail: " + authReq.auth.mail);
            console.log("  Auth Level: " + authReq.auth.authLevel);

            if (authReq.auth.authLevel > authLevel) {
                res.status(403).json({
                    error: true,
                    message: 'Non sei autorizzato ad accedere a questa risorsa.'
                });
            } else {
                next();
            }
        }
    ];
}

//------------------------------------------------------------------------------
