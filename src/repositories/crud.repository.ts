import { Crud } from "../models/crud.model";
import { IResponseBody } from "../interfaces/common.interface";
import { ICrud } from "../interfaces/crud.interface";

class CrudRepository {

    /**
     * add data repository
     * @param {ICrud} requestBody 
     * @returns {IResponseBody} responseBody
     */
    public static async addData(requestBody: ICrud): Promise<any> {
        try {

            const { name, email, age } = requestBody;

            const isEmailExists = await Crud.findOne({ email: email });

            if (isEmailExists) {
                const responseBody: IResponseBody = {
                    status: 409,
                    message: 'Email already exists',
                    body: {}
                }
                return responseBody
            }

            const data = new Crud({
                name,
                email,
                age
            });

            const insertedData = await data.save();

            const responseBody: IResponseBody = {
                status: 201,
                message: 'Data added successfully',
                body: insertedData
            }
            return responseBody

        }
        catch (error) {
            throw error
        }
    }

    /**
     * get data repository
     * @returns {IResponseBody} resposeBody
     */
    public static async getData(): Promise<any> {
        try {
            const data = await Crud.find({});
            const responseBody: IResponseBody = {
                status: 200,
                message: 'Data fetched successfully',
                body: data
            }
            return responseBody
        }
        catch (error) {
            throw error
        }
    }

    public static async getDataById(): Promise<any> {
        try {
            const data = await Crud.find({});
            const responseBody: IResponseBody = {
                status: 200,
                message: 'Data fetched successfully',
                body: data
            }
            return responseBody
        }
        catch (error) {
            throw error
        }
    }
}

export default CrudRepository