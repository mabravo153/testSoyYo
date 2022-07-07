import {Express} from "express";
import { APP_VARIABLES } from "../common/initial.config";
import { startApp } from "../infrastructure/entry-points/express/setup/server";

console.log('Environment:', APP_VARIABLES.NODE_ENV );

export async function start(){
    const expressApp = startApp();
    
    return {
        express: expressApp
    }
}

start().then();
