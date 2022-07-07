import { APP_VARIABLES } from '../../../../common/initial.config';
import { App } from './app';


const port = APP_VARIABLES.APP_PORT || 9000;

export function startApp(){
    const app = App();
    app.listen(port, ()=>{
        console.log('App started on port '+ port);
    });
    return app
}
