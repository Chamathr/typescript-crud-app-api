import { Auth } from "../models/auth.model";
import { IResponseBody } from "../interfaces/common.interface";
import { ISignup } from "../interfaces/auth.interface";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthRepository {

/**
 * signup repository
 * @param {ISignup} requestBody 
 * @returns {IResponseBody} responseBody
 */
    public static async signUp(requestBody: ISignup): Promise<any> {
        try {

            const { name, email, age, password } = requestBody;
            const encryptedPassword = bcrypt.hashSync(password, 8)

            const isEmailExists = await Auth.findOne({ email: email });

            if (isEmailExists) {
                const responseBody: IResponseBody = {
                    status: 409,
                    message: 'Email already exists',
                    data: {}
                }
                return responseBody
            }

            const data = new Auth({
                name,
                email,
                age,
                password: encryptedPassword
            });

            const insertedData = await data.save();

            const responseBody: IResponseBody = {
                status: 201,
                message: 'Data added successfully',
                data: insertedData
            }
            return responseBody

        }
        catch (error) {
            throw error
        }
    }
}

export default AuthRepository