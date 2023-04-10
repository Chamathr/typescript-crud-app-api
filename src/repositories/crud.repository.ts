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
    public static async getData(page: string): Promise<any> {
        try {
            const pageNumber = parseInt(page) || 1
            const pageSize = 10
            const skips = pageSize * (pageNumber - 1);
            const sort: any = { createdAt: -1 }

            const data = await Crud.find({isDelete: false}).skip(skips).limit(pageSize).sort(sort);
            const totalCount = await Crud.countDocuments({});
            const totalPages = Math.ceil(totalCount / pageSize);

            const responseBody: IResponseBody = {
                status: 200,
                message: 'Data fetched successfully',
                body: {
                    data: data,
                    totalItems: totalCount,
                    currentPage: pageNumber,
                    totalPages: totalPages
                }
            }
            return responseBody
        }
        catch (error) {
            throw error
        }
    }

    /**
     * get data by id repository
     * @param {string} id 
     * @returns {IResponseBody} responseBody
     */
    public static async getDataById(id: string): Promise<any> {
        try {
            const data = await Crud.findOne({ _id: id });
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