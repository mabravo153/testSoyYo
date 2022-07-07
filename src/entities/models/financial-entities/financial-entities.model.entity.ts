export interface FinancialEntity {
    entityId: number
    name: string
    identificationNumber: string
    expirationDate: string
    contactName: string 
    contactEmail: string
    logo: string
}



export interface Filter {
    startId: number
    endId: number
}