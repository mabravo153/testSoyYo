import { FinancialEntity, Filter } from "../../models/financial-entities/financial-entities.model.entity";

export interface IFinancialEntitiesUseCase {
    getAll(filterData: Filter): Promise<FinancialEntity[]>
    makeRange(filterData: Filter): number[]
    //sortEntitiesByName(array: FinancialEntity[]): Promise<FinancialEntity[]>
    requestEntitiesProperties(numbers:number[]): Promise<any>
}