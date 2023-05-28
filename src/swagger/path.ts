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

    /*add data*/
    public static addData = {
        "post": {
            "summary": "Add data",
            "operationId": "add-data",
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

    /*update data by id*/
    public static updateData = {
        "put": {
            "summary": "Update data",
            "operationId": "update-data",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
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
                                "age": {
                                    "type": "integer",
                                }
                            },
                        },
                    },
                },
            },
            "responses": {
                "200": {
                    "description": "Data updated successfully",
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

    /*delete data by id*/
    public static deleteData = {
        "put": {
            "summary": "Delete data",
            "operationId": "delete-data",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
            "responses": {
                "200": {
                    "description": "Data deleted successfully",
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
                    "type": "integer"
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

      /*Get data by id*/
      public static getDataById = {
        "get": {
            "summary": "Get data by id data",
            "operationId": "get-data-by-id",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Id",
                    "required": true,
                    "type": "string",
                }
            ],
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