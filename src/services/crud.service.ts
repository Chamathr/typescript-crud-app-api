import CrudRepository from '../repositories/crud.repository'

class CrudService {

    public static async addData(requestBody: any): Promise<any> {
        try {
            const response = await CrudRepository.addData(requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }
}

export default CrudService