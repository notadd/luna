class CoreError extends Error {
    constructor(code: string, message: string) {
        super(message);
        this.code = code;
        this.message = message;
    }

    public code;
    public message;
}

export class TypeError extends CoreError {
    constructor(code: string, message: string) {
        super(code, message)
    }
}
export class ServiceError extends CoreError {
    constructor(code: string, message: string) {
        super(code, message)
    }
}
export class TypeOrmError extends CoreError {
    constructor(code: string, message: string) {
        super(code, message)
    }
}