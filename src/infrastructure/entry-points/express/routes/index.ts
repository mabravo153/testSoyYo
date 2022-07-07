import { Router } from 'express';
import { financialEntitiesConfigRouter } from './financial-entities.route';

const routes = ()=>{
    const router = Router();
    router.use('/entities',financialEntitiesConfigRouter())
    return router;
};

export {
    routes
};
