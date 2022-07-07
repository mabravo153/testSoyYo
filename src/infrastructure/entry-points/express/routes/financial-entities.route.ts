import { Router } from 'express';
import { routeAdapter } from '../adapters/route-adapter';
import { createFinancialControllerFactory } from '../../../../main/factories/controllers/financial-entities.controller.factory';


const financialEntitiesConfigRouter = () => {

    const { financialEntityController } = createFinancialControllerFactory()

    const router = Router()

    router.route('/filter')
          .post(routeAdapter(financialEntityController.getAll))


    return router
}

export {
    financialEntitiesConfigRouter
}