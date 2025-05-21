import { Request } from 'express';

interface AuthPayload {
    id: number;
    mail: string;
    authLevel: number;
}

export interface AuthenticatedRequest extends Request {
    auth: AuthPayload;
}

export interface AppError extends Error {
    status?: number;
}