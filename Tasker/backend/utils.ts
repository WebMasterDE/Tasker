import { error } from 'console';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';


//------------------------------------------------------------------------------

export const isValidDotEnv = (dotEnv: dotenv.DotenvConfigOutput): boolean => {
    if (dotEnv.error) {
        console.log('\x1b[31m%s\x1b[0m', "Unable to load \".env\" file. Please provide one to store the JWT secret key");//red
        return false;
    }
    if (!process.env.JWT_SECRET) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but JWT_SECRET=<jwt_secret> key-value pair was not found");//red
        return false;
    }
    if (!process.env.HOST) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but HOST=<host> key-value pair was not found");//red
        return false;
    }
    if (!process.env.PORT) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but PORT=<port> key-value pair was not found");//red
        return false;
    }
    if (!process.env.USER) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but USER=<user> key-value pair was not found");//red
        return false;
    }
    if (!process.env.PASSWORD) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but PASSWORD=<password> key-value pair was not found");//red
        return false;
    }
    if (!process.env.DB) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but DB=<db> key-value pair was not found");//red
        return false;
    }
    if (!process.env.DBDIVEN) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but DBDIVEN=<dbdiven> key-value pair was not found");//red
        return false;
    }
    return true;
};

//------------------------------------------------------------------------------

export interface AppError extends Error {
    status?: number;
}

export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
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