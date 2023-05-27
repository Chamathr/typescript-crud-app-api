class AuthSwagger {

    /*add data*/
    public static signUp = {
        "post": {
            "summary": "Signup",
            "operationId": "signup",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                },
                                "email": {
                                    "type": "string",
                                },
                                "password": {
                                    "type": "string",
                                },
                                "age": {
                                    "type": "integer",
                                }
                            },
                        },
                    },
                },
            },
            "responses": {
                "201": {
                    "description": "Data added successfully",
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


export { AuthSwagger }