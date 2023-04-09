import { Joi, Segments } from 'celebrate'

const crudValidation = {

    addData: {
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            age: Joi.number().integer().required()
        })
    },
}

module.exports = { crudValidation }