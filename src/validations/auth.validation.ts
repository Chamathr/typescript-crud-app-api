import { Joi, Segments } from 'celebrate'

const authValidation = {

    signup: {
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number().integer().required()
        })
    },
    signin: {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    },
    accessToken: {
        [Segments.BODY]: Joi.object().keys({
            refreshToken: Joi.string().required(),
        })
    },
}

module.exports = { authValidation }