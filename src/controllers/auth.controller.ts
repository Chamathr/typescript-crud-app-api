import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { IResponseBody } from "../interfaces/common.interface";
import { ISignup, ISignin } from "../interfaces/auth.interface";

class AuthController {

    /**
   * signup controller
   * @param {Request} req 
   * @param {Response} res 
   */
    public static async signUp(req: Request, res: Response): Promise<any> {
        try {
            const requestBody: ISignup = req?.body
            const response = await AuthService.signUp(requestBody)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                data: response?.data
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error: any) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                data: error.message
            }
            res.status(500).json(responseBody);
        }
    }

      /**
   * signin controller
   * @param {Request} req 
   * @param {Response} res 
   */
      public static async signIn(req: Request, res: Response): Promise<any> {
        try {
            const requestBody: ISignin = req?.body
            const response = await AuthService.signIn(requestBody)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                data: response?.data
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error: any) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                data: error.message
            }
            res.status(500).json(responseBody);
        }
    }

}

export default AuthController