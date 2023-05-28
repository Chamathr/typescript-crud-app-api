import express from 'express';
const router = express.Router();
const { celebrate }  = require('celebrate')
const crud = require('../validations/crud.validation')
import CrudController from '../controllers/crud.controller'

/*crud routes*/
router.get('/', CrudController.healthcheck)
router.post('/add', [celebrate(crud.crudValidation.addData)], CrudController.addData)
router.get('/get', [celebrate(crud.crudValidation.getData)], CrudController.getData)
router.get('/get/:id', [celebrate(crud.crudValidation.getDataById)], CrudController.getDataById)
router.put('/update/:id', [celebrate(crud.crudValidation.updateData)], CrudController.updateData)
router.put('/delete/:id', [celebrate(crud.crudValidation.deleteData)], CrudController.deleteData)

export { router as crudRouter };
