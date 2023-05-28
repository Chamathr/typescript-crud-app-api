class IndexSwagger {
    
    /*healthCheck*/
    public static healthCheck = {
        "get": {
            "summary": "Health Check",
            "operationId": "health-check",
            "responses": {
                "200": {
                    "description": "Health Check Successful",
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
                },
                "400": {
                    "description": "Bad Request",
                },
                "401": {
                    "description": "Unauthorized",
                },
                "500": {
                    "description": "Internal Server Error",
                },
            },
        },
    };
}


export { IndexSwagger }