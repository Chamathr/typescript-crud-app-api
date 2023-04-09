import express from 'express';
const router = express.Router();
import { celebrate } from 'celebrate'
const crud = require('../validations/crud.validation')

import CrudController from '../controllers/crud.controller'


/*crud routes*/
router.route('/').get(CrudController.healthcheck);
router.post('/add', [celebrate(crud.crudValidation.addData)], CrudController.addData)


export { router as crudRouter };
