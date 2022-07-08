import { IFinancialEntitiesUseCase } from "../../../entities/use-cases/financial-entities/financial-entities.use-case.entity";
import { FinancialEntity, Filter } from '../../../entities/models/financial-entities/financial-entities.model.entity';
import { IEntitiesAPIConnector } from '../../ports/connectors/entities-api.connector';
import { ApplicationError } from '../../../common/error/application-error.helper';
import { ErrorCode } from "../../../common/error/custom-error.helper";


export class FinancialEntityUseCase implements IFinancialEntitiesUseCase {

    constructor(private readonly IEntitiesAPIConnector: IEntitiesAPIConnector){}
    

    async getAll(filterData: Filter): Promise<FinancialEntity[]> {
        
        let rangeNumbers = this.makeRange(filterData);

        let resultRequest = await this.requestEntitiesProperties(rangeNumbers)

        resultRequest.sort(this.functionSort("name"))

        return resultRequest

    }

    
    async requestEntitiesProperties(numbers: number[]): Promise<any> { 

        let responseRequest: any[] = []

        for (let index = 0; index < numbers.length; index++) {
            let response = await this.IEntitiesAPIConnector.getEntityById(numbers[index])
            console.log(response);
            
            if(response){
                responseRequest.push(response)
            }else{
                throw new ApplicationError("Error: item not found for specified range", ErrorCode.NotFound, "Error: item not found for specified range");
            
            }

        }
        
        return responseRequest
    }
   
    makeRange(filterData:Filter): number[] {
        const { startId, endId } = filterData
        let arrayResponse: number[] = []

        if(startId > endId){
            throw new ApplicationError("please validate input data", ErrorCode.BadRequest, "please validate input data")
        }

        for (let index = startId; index <= endId; index++) {
            arrayResponse.push(index)
        }
        return arrayResponse
    }

   functionSort (property: string) {
    
    
            let sortOrder= 1

            if(property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }

            return function (a:any,b:any) {
                if(sortOrder == -1){
                    return b[property].localeCompare(a[property]);
                }else{
                    return a[property].localeCompare(b[property]);
                }        
            }

   }

}
