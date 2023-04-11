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
        "/get": Swagger.getData
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
