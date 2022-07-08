import { FinancialEntityUseCase } from "../../../src/application/use-cases/financial-entities/financial-entities.use-case"
import { EntityAPIConnectorMock } from "../../entry-points/entities-api.entry-point.mock"



const financialUseCaseMock = new FinancialEntityUseCase(new EntityAPIConnectorMock())

describe("ENTITIES USE CASE", function () {
    
    describe("request entities", () => {
        it("should return requested entities", async () => {
            const entities = await financialUseCaseMock.getAll({startId: 1, endId: 4})
            expect(Array.isArray(entities)).toBe(true)
        })

        it("should return error", async () => {
            
            await expect(financialUseCaseMock.getAll({startId: 5, endId: 9})).rejects.toMatchObject({status: "Error: item not found for specified range"}) 
        })
    })

})