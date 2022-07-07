import { IEntitiesAPIConnector } from "../../../application/ports/connectors/entities-api.connector";
import { HttpAdapter } from '../adapters/http.adapters';
import { APP_VARIABLES } from "../../../common/initial.config";
import { ErrorCode } from "../../../common/error/custom-error.helper";
import { ApplicationError } from "../../../common/error/application-error.helper";


const mockResponseEntity: any[] = [
    {
        entityId: 1,
        name: "davivienda",
        identificationNumber: "qwzxc264",
        expirationDate: "2012-01-2",
        contactName: "marco antonio solis" ,
        contactEmail:"msolis@gmail.com",
        logo: "http:aws32",
    },
    {
        entityId: 2,
        name: "caja social",
        identificationNumber: "qwzxc264",
        expirationDate: "2012-01-2",
        contactName: "marco antonio solis" ,
        contactEmail:"msolis@gmail.com",
        logo: "http:aws32",
    },
    {
        entityId: 3,
        name: "xpectrum",
        identificationNumber: "qwzxc264",
        expirationDate: "2012-01-2",
        contactName: "marco antonio solis" ,
        contactEmail:"msolis@gmail.com",
        logo: "http:aws32",
    },
    {
        entityId: 4,
        name: "bancolombia",
        identificationNumber: "qwzxc264",
        expirationDate: "2012-01-2",
        contactName: "marco antonio solis" ,
        contactEmail:"msolis@gmail.com",
        logo: "http:aws32",
    },

] 


export class EntityAPIConnector implements IEntitiesAPIConnector {


    static instance: EntityAPIConnector
    private httpAdapter: HttpAdapter

    constructor(){
        this.httpAdapter = new HttpAdapter(APP_VARIABLES.ENTITIES_URL)
    }
    async getEntityById(id: number): Promise<any> {

        const response = mockResponseEntity.find(element => element.entityId == id)

        

        return response

        // const response = await this.httpAdapter.get(`${id}`)
        // return response.data
    }

}