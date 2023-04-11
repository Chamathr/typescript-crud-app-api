class Swagger {
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

    /*get all data*/
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
            "operationId": "get-all-data",
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
            }
        }
    }
}


export { Swagger }