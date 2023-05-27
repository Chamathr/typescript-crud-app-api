import { IResponseBody } from '../interfaces/common.interface'
import { ISignup } from '../interfaces/auth.interface'
import AuthRepository from '../repositories/auth.repository'

class AuthService {

    /**
     * signup service
     * @param {ISignup} requestBody 
     * @returns {IResponseBody} responseBody
     */
    public static async signUp(requestBody: ISignup): Promise<any> {
        try {
            const response: IResponseBody = await AuthRepository.signUp(requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }

}

export default AuthService