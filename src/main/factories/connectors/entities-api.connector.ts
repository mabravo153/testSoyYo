import { EntityAPIConnector } from "../../../infrastructure/driven-adapters/connectors/entity-api.connector";


let entityConnector: EntityAPIConnector


export function retrieveActorConnector(): EntityAPIConnector {
    if (!entityConnector){
        entityConnector = new EntityAPIConnector()
    }
    return entityConnector
}