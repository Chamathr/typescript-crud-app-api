import { IResponseBody } from '../interfaces/common.interface'
import { ICrud } from '../interfaces/crud.interface'
import CrudRepository from '../repositories/crud.repository'

class CrudService {

    /**
     * add data service
     * @param {ICrud} requestBody 
     * @returns {IResponseBody} responseBody
     */
    public static async addData(requestBody: ICrud): Promise<any> {
        try {
            const response: IResponseBody = await CrudRepository.addData(requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
     * get data service
     * @param {string} page
     * @returns {IResponseBody} responseBody
     */
    public static async getData(page: string): Promise<any> {
        try {
            const response: IResponseBody = await CrudRepository.getData(page)
            return response
        }
        catch (error) {
            throw error
        }
    }

     /**
     * get data by id service
     * @param {string} id
     * @returns {IResponseBody} responseBody
     */
     public static async getDataById(id: string): Promise<any> {
        try {
            const response: IResponseBody = await CrudRepository.getDataById(id)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
     * update data by id service
     * @param {string} id
     * @param {object} requestBody
     * @returns {IResponseBody} responseBody
     */
    public static async updateData(id: string, requestBody: object): Promise<any> {
        try {
            const response: IResponseBody = await CrudRepository.updateData(id, requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
     * delete data by id service
     * @param {string} id
     * @returns {IResponseBody} responseBody
     */
    public static async deleteData(id: string): Promise<any> {
        try {
            const response: IResponseBody = await CrudRepository.deleteData(id)
            return response
        }
        catch (error) {
            throw error
        }
    }
}

export default CrudService