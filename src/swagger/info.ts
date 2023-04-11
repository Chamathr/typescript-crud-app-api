import { Swagger } from "./path"
require('dotenv').config()

const serverPrefix = process.env.SERVER_PREFIX
export const swaggerDoc = {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Swagger CRUD API",
        "description": "A sample CRUD API built with Swagger and Node.js"
    },
    "servers": [
        {
            "url": `http://localhost:8000${serverPrefix}`
        }
    ],
    "paths": {
        "/": Swagger.healthCheck,
        "/add": Swagger.addData,
        "/update/{id}": Swagger.updateData,
        "/get": Swagger.getData,
        "/delete/{id}": Swagger.deleteData,
        "/get/{id}": Swagger.getDataById
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
