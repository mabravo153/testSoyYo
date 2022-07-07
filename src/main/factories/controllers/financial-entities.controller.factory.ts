import { FinancialEntityController } from '../../../presentation/controllers/financial-entities/financial-entities';
import { FinancialEntityUseCase } from '../../../application/use-cases/financial-entities/financial-entities.use-case';
import { GeneralResponseHandler } from '../../../presentation/responses/general-response.handler.adapter';
import { retrieveActorConnector } from '../connectors/entities-api.connector';


let financialEntityController: FinancialEntityController
let financialEntityUseCase: FinancialEntityUseCase


export function createFinancialControllerFactory(){

    if (!financialEntityUseCase) {
        let entityconnector = retrieveActorConnector()
        financialEntityUseCase = new FinancialEntityUseCase(entityconnector)
    }

    if(!financialEntityController){
        financialEntityController = new FinancialEntityController(financialEntityUseCase, new GeneralResponseHandler())
    }

    return {
        financialEntityController,
        financialEntityUseCase
    }

}