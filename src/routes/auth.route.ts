import express from 'express';
const router = express.Router();
const { celebrate }  = require('celebrate')
const auth = require('../validations/auth.validation')
import AuthController from '../controllers/auth.controller'

/*auth routes*/
router.post('/signup', [celebrate(auth.authValidation.signup)], AuthController.signUp)
router.post('/signin', [celebrate(auth.authValidation.signin)], AuthController.signIn)

export { router as authRouter };
