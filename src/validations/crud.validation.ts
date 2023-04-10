import { Joi, Segments } from 'celebrate'

const crudValidation = {

    addData: {
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            age: Joi.number().integer().required()
        })
    },
    getData: {
        [Segments.QUERY]: {
            page: Joi.string().required()
        }
    },
    getDataById: {
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    },
    updateData: {
        [Segments.PARAMS]: {
            id: Joi.string().required()
        },
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string(),
            age: Joi.number().integer()
        })
    },
    deleteData: {
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    }
}

module.exports = { crudValidation }