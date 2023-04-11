class Swagger {
    /*swagger for healthCheck*/
    public static healthCheck = {
        get: {
            summary: "Health Check",
            tags: ["Crud"],
            responses: {
                "200": {
                    description: "Health Check Successful",
                    schema: {
                        type: "object",
                        properties: {
                            code: {
                                type: "string",
                                description: "200",
                            },
                            message: {
                                type: "string",
                                description: "Success",
                            },
                            data: {
                                type: "string",
                                description: "Healthcheck Pass",
                            },
                        },
                    },
                },
                "400": {
                    description: "Bad Request",
                },
                "401": {
                    description: "Unauthorized",
                },
                "500": {
                    description: "Internal Server Error",
                },
            },
        },
    };

    public static getData = {
        "get": {
            "summary": "Get all data",
            "parameters": [
                {
                    "name": "page",
                    "in": "query",
                    "description": "Page number",
                    "required": true,
                    "type": "integer",
                    "readOnly": false
                }
            ],
            "operationId": "getAllData",
            "responses": {
                "200": {
                    "description": "Data fetched successfully",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                type: "string",
                                description: "Response status code",
                            },
                            "message": {
                                type: "string",
                                description: "Response message",
                            },
                            "data": {
                                type: "string",
                                description: "Response data",
                            },
                        },
                    },
                }
            }
        }
    }
}


export { Swagger }