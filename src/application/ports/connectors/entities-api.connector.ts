
export interface IEntitiesAPIConnector {
    getEntityById(id: number): Promise<any>
}