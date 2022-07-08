import { IController, ControllerAction } from "../../../application/ports/controllers/controller.port";
import { RequestModel } from "../../../application/ports/requests/request.port";
import { ResponseHandler, ResponseModel} from '../../../application/ports/responses/response.port';
import { FinancialEntityUseCase } from '../../../application/use-cases/financial-entities/financial-entities.use-case';
import { ApplicationError } from '../../../common/error/application-error.helper';
import { ErrorCode } from "../../../common/error/custom-error.helper";
import { FinancialEntity } from "../../../entities/models/financial-entities/financial-entities.model.entity";


export type FilterRequestParamsInput = {
    startId: number
    endId: number
}

export class FinancialEntityController implements IController {
    public static instance: FinancialEntityController
    [name: string]: ControllerAction | unknown


    constructor(private readonly financialUseCase: FinancialEntityUseCase, private readonly responseHandler: ResponseHandler){
        FinancialEntityController.instance = this
    }

    async getAll(request: RequestModel<FilterRequestParamsInput>): Promise<ResponseModel<FinancialEntity[]>> {
        try {
           
            if(!request.body || Object.keys(request.body).length === 0){
                throw new ApplicationError("Body was not provided", ErrorCode.BadRequest, "Body was not provided");
            }

            await FinancialEntityController.instance.validateBody(request.body)

            const propertiesInformation = await FinancialEntityController.instance.financialUseCase.getAll(request.body)
            return await FinancialEntityController.instance.responseHandler.response("success", 200, propertiesInformation)
        } catch (e: any) { 
            return await FinancialEntityController.instance.errorHandler(e)
        }
    }


    async validateBody(input:FilterRequestParamsInput) {
        if(!input.startId){
            throw new ApplicationError("startId was not provided", ErrorCode.BadRequest,"startId was not provided")
        }
        if(!input.endId){
            throw new ApplicationError("endId was not provided", ErrorCode.BadRequest,"endId was not provided")
        }

        if(input.startId > 20 || input.startId < 1  ){
            throw new ApplicationError("startId must be bigger that 1 and lower that 20", ErrorCode.BadRequest,"startId must be bigger that 1 and lower that 20")
        }

        if(input.endId > 20 || input.endId < 1 ){
            throw new ApplicationError("endId must be bigger that 1 and lower that 20", ErrorCode.BadRequest,"endId must be bigger that 1 and lower that 20")
        }

    }

    private async errorHandler(err: any): Promise<ResponseModel<any>> {
        return await FinancialEntityController.instance.responseHandler.response('error', err._errorCode ||  500, err._rawErrorMessage);
    }

}