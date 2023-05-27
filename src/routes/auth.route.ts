import express from 'express';
const router = express.Router();
const { celebrate }  = require('celebrate')
const auth = require('../validations/auth.validation')
import AuthController from '../controllers/auth.controller'

/*auth routes*/
router.post('/signup', [celebrate(auth.authValidation.signup)], AuthController.signUp)
// router.get('/login', [celebrate(crud.crudValidation.signIn)], CrudController.signIn)

export { router as authRouter };
