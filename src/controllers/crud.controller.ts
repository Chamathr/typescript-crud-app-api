import { Request, Response } from "express";
import CrudService from "../services/crud.service";
import { IErrorBody, IResponseBody } from "../interfaces/common.interface";

class CrudController {

    public static async healthcheck(req: Request, res: Response): Promise<any> {
        try {
            const responseBody: IResponseBody = {
                status: 200,
                message: 'Service is running fine',
                body: 'Service is running fine'
            }
            res.status(200).json(responseBody);
        }
        catch (error) {
            const errorBody: IErrorBody = {
                status: 500,
                message: 'Error',
                body: 'Error'
            }
            res.status(500).json(errorBody);
        }
    }

    public static async addData(req: Request, res: Response): Promise<any> {
        try {
            const response = await CrudService.addData(req?.body)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                body: response?.body
            }
            res.status(201).json(responseBody)
        }
        catch (error) {
            const errorBody: IErrorBody = {
                status: 500,
                message: 'failed',
                body: error.toString()
            }
            res.status(500).json(errorBody);
        }
    }
}

export default CrudController