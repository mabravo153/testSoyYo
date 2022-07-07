import {CustomError} from "./custom-error.helper";

export class DatabaseError extends CustomError{
    constructor(message: string, errorCode: number, status: string) {
        super("Database Level", message, errorCode, status);
    }
}
