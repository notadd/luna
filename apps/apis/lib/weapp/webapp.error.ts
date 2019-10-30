export class WebAppError extends Error {
    constructor(code: string,message: string) {
        super(message);
        this.code = code;
        this.message = message;
    }

    public code;
    public message;
}