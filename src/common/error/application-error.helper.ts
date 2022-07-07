import {CustomError} from "./custom-error.helper";

export class ApplicationError extends CustomError{
    constructor(message: string, errorCode: number, status: string) {
        super("Application Level", message, errorCode, status);
    }
}
