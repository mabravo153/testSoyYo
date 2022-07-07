export class CustomError extends Error{

    private readonly _errorCode: number;
    private readonly _status: string;
    private readonly _rawErrorMessage: string;

    constructor(level: string, message: string, errorCode: number, status: string) {
        super(`[ERROR:${level}] [${new Date().toJSON()}] ${message}`);
        this._rawErrorMessage = message;
        this._errorCode = errorCode;
        this._status = status;
    }

    get errorCode(): number {
        return this._errorCode;
    }
    get status(): string{
        return this._status;
    }
    get rawErrorMessage(): string{
        return this._rawErrorMessage;
    }
}

export enum ErrorCode{
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound= 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    Conflict = 409,
    UnsupportedMediaType = 415,
    UnprocessableEntity = 422,
    InternalServerError = 500,
    NotImplemented = 501,
    ServiceUnavailable = 503
}
