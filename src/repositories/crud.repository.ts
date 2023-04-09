import { Crud } from "../models/crud.model";

class CrudRepository {
    static async addData(requestBody: any) {
        try {

            const { name, email, age } = requestBody;

            const isEmailExists = await Crud.findOne({ email: email });

            if (isEmailExists) {
                const responseBody = {
                    status: 409,
                    message: 'Email already exists',
                    body: {}
                }
                return responseBody
            }

            const data = Crud.build({
                name,
                email,
                age
            });

            const insertedData = await data.save();

            const responseBody = {
                status: 201,
                message: 'Data added successfully',
                body: insertedData
            }
            return responseBody

        } catch (error) {
            throw error
        }
    }
}

export default CrudRepository