const validateEnvironmentVariable = (variable: string): string => {
    if(!process.env?.[variable]){
        console.error(`Environment variable ${variable} is required`);
        process.exit(1);
    }
    return process.env?.[variable]!;
}


export const APP_VARIABLES = {
    APP_PORT: validateEnvironmentVariable("APP_PORT"),
    NODE_ENV: validateEnvironmentVariable("NODE_ENV"),
    ENTITIES_URL: validateEnvironmentVariable("ENTITIES_URL")
}