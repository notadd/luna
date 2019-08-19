export interface LoginInput {
    username: string;
    password: string;
}

export interface LoginResult {
    code: number;
    message: string;
}