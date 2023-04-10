import { Request, Response } from "express";
import CrudService from "../services/crud.service";
import { IResponseBody } from "../interfaces/common.interface";
import { ICrud } from "../interfaces/crud.interface";

class CrudController {

    /**
     * health check controller
     * @param {Request} req 
     * @param {Response} res 
     */
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
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                body: 'Error'
            }
            res.status(500).json(responseBody);
        }
    }

    /**
     * add data controller
     * @param {Request} req 
     * @param {Response} res 
     */
    public static async addData(req: Request, res: Response): Promise<any> {
        try {
            const requestBody: ICrud = req?.body
            const response = await CrudService.addData(requestBody)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                body: response?.body
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                body: error.message
            }
            res.status(500).json(responseBody);
        }
    }

    /**
     * get data controller
     * @param {Request} req 
     * @param {Response} res 
     *  
     */
    public static async getData(req: Request, res: Response): Promise<any> {
        try {
            const page: any = req?.query?.page
            const response = await CrudService.getData(page)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                body: response?.body
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                body: error.message
            }
            res.status(500).json(responseBody);
        }
    }

    /**
     * get data by id controller
     * @param {Request} req 
     * @param {Response} res 
     *  
     */
    public static async getDataById(req: Request, res: Response): Promise<any> {
        try {
            const id: string = req?.params?.id
            const response = await CrudService.getDataById(id)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                body: response?.body
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                body: error.message
            }
            res.status(500).json(responseBody);
        }
    }


}

export default CrudController