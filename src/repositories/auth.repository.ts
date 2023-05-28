import { Auth } from "../models/auth.model";
import { IResponseBody } from "../interfaces/common.interface";
import { ISignup, ISignin } from "../interfaces/auth.interface";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import jwtAuth from '../config/auth'

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

    /**
 * signup repository
 * @param {ISignin} requestBody 
 * @returns {IResponseBody} responseBody
 */
    public static async signIn(requestBody: ISignin): Promise<any> {
        try {

            const { email, password } = requestBody;

            const user = await Auth.findOne({ email: email });

            if (!user) {
                const responseBody: IResponseBody = {
                    status: 403,
                    message: 'Invalid user',
                    data: {}
                }
                return responseBody
            }

            const passwordIsValid = bcrypt.compareSync(
                password,
                user?.password
            );
            if (!passwordIsValid) {
                const responseBody: IResponseBody = {
                    status: 403,
                    message: 'Invalid password',
                    data: {}
                }
                return responseBody
            }

            const token = jwt.sign({ email: user?.email  }, jwtAuth.secret, {
                expiresIn: jwtAuth.time
            });
    
            const responseBody: IResponseBody = {
                status: 201,
                message: 'Succesfully logged in',
                data: token
            }
            return responseBody

        }
        catch (error) {
            throw error
        }
    }
}

export default AuthRepository