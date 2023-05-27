import { Joi, Segments } from 'celebrate'

const crudValidation = {

    addData: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            age: Joi.number().integer().required()
        })
    },
    getData: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.QUERY]: {
            page: Joi.string().required()
        }
    },
    getDataById: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    },
    updateData: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.PARAMS]: {
            id: Joi.string().required()
        },
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string(),
            age: Joi.number().integer()
        })
    },
    deleteData: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    },
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
}

module.exports = { crudValidation }