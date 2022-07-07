import { IController, ControllerAction } from "../../../application/ports/controllers/controller.port";
import { RequestModel } from "../../../application/ports/requests/request.port";
import { ResponseHandler, ResponseModel} from '../../../application/ports/responses/response.port';
import { FinancialEntityUseCase } from '../../../application/use-cases/financial-entities/financial-entities.use-case';
import { ApplicationError } from "../../../common/error/application-error.helper";
import { ErrorCode } from "../../../common/error/custom-error.helper";
import { FinancialEntity } from "../../../entities/models/financial-entities/financial-entities.model.entity";


export type filterRequestParamsInput = {
    startId: number
    endId: number
}

export class FinancialEntityController implements IController {
    public static instance: FinancialEntityController
    [name: string]: ControllerAction | unknown


    constructor(private readonly financialUseCase: FinancialEntityUseCase, private readonly responseHandler: ResponseHandler){
        FinancialEntityController.instance = this
    }

    async getAll(request: RequestModel<filterRequestParamsInput>): Promise<ResponseModel<FinancialEntity[]>> {
        try {
           
            if(!request.body || Object.keys(request.body).length === 0){
                throw new ApplicationError("Body was not provided", ErrorCode.BadRequest, "Body was not provided");
            }

            const propertiesInformation = await FinancialEntityController.instance.financialUseCase.getAll(request.body)
            return await FinancialEntityController.instance.responseHandler.response("success", 200, propertiesInformation)
        } catch (e: any) {
            return await FinancialEntityController.instance.errorHandler(e)
        }
    }


    private async errorHandler(err: any): Promise<ResponseModel<any>> {
        return await FinancialEntityController.instance.responseHandler.response('error', err._errorCode ||  500, err._rawErrorMessage);
    }

}