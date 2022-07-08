
import { IEntitiesAPIConnector } from '../../src/application/ports/connectors/entities-api.connector';
import { mockResponseEntity } from '../mocks/data/financial-entities.mock.spec';


export class EntityAPIConnectorMock implements IEntitiesAPIConnector {

    async getEntityById(id: number): Promise<any> {

        const response = mockResponseEntity.find(element => element.entityId == id)

        return response
    }
}