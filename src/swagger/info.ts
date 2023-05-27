import { IndexSwagger } from "./index.path"
import { CrudSwagger } from "./crud.path"
import { AuthSwagger } from "./auth.path"
require('dotenv').config()

const serverPrefix = process.env.SERVER_PREFIX
const baseUrl = process.env.BASE_URL

export const swaggerDoc = {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Swagger CRUD API",
        "description": "A sample CRUD API built with Swagger and Node.js"
    },
    "servers": [
        {
            "url": `${baseUrl}/${serverPrefix}`
        }
    ],
    "paths": {
        /*index swagger*/
        "/": IndexSwagger.healthCheck,

        /*crud swagger*/
        "/crud/add": CrudSwagger.addData,
        "/crud/update/{id}": CrudSwagger.updateData,
        "/crud/get": CrudSwagger.getData,
        "/crud/delete/{id}": CrudSwagger.deleteData,
        "/crud/get/{id}": CrudSwagger.getDataById,

        /*auth swagger*/
        "/auth/signup": AuthSwagger.signUp,
        "/auth/signin": AuthSwagger.signIn
    },
    "components": {
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
            },
        },
    },
    "security": [
        {
            "bearerAuth": [],
        },
    ],
};
