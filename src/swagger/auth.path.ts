class AuthSwagger {

    /*signup data*/
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

    /*signup data*/
    public static signIn = {
        "post": {
            "summary": "Signin",
            "operationId": "signin",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string",
                                },
                                "password": {
                                    "type": "string",
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

    /*access-token by refresh-token data*/
    public static accessToken = {
        "post": {
            "summary": "AccessToken",
            "operationId": "access-token",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "refreshToken": {
                                    "type": "string",
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