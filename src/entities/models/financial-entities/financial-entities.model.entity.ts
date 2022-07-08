export interface FinancialEntity {
    entityId: number
    name: string
    identificationNumber: string | null
    expirationDate: string | null
    contactName: string | null
    contactEmail: string | null
    logo: string | null
    msg?: string
}



export interface Filter {
    startId: number
    endId: number
}