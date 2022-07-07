import { RequestModel } from '../requests/request.port';
import { ResponseModel } from '../responses/response.port';

export type ControllerAction = (request: RequestModel) => Promise<ResponseModel<any>>;

export interface IController {
    [name: string]: ControllerAction | unknown;
}
