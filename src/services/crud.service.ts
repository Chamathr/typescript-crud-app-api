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
     * @returns {IResponseBody} responseBody
     */
    public static async getData(): Promise<any> {
        try {
            const response: IResponseBody = await CrudRepository.getData()
            return response
        }
        catch (error) {
            throw error
        }
    }
}

export default CrudService