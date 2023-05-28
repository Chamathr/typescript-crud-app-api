import express from 'express';
const router = express.Router();
const { celebrate } = require('celebrate')
const crud = require('../validations/crud.validation')
import CrudController from '../controllers/crud.controller'
import AuthMiddleware from '../middlewares/auth.middleware';

/*crud routes*/
router.post('/add', [celebrate(crud.crudValidation.addData)], [AuthMiddleware.authenticateToken], CrudController.addData)
router.get('/get', [celebrate(crud.crudValidation.getData)], [AuthMiddleware.authenticateToken], CrudController.getData)
router.get('/get/:id', [celebrate(crud.crudValidation.getDataById)], [AuthMiddleware.authenticateToken], CrudController.getDataById)
router.put('/update/:id', [celebrate(crud.crudValidation.updateData)], [AuthMiddleware.authenticateToken], CrudController.updateData)
router.put('/delete/:id', [celebrate(crud.crudValidation.deleteData)], [AuthMiddleware.authenticateToken], CrudController.deleteData)

export { router as crudRouter };
