

export interface DefaultResponse {
    error: boolean;
    message: string;
}

export interface LoginResponse extends DefaultResponse {
    token: string;
}

export interface TokenData {
    id: number;
    mail: string;
    authLevel: number;
}