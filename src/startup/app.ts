import express, { Application } from 'express';
const cors = require('cors');
import { crudRouter } from '../routes/crud.route';
import { authRouter } from '../routes/auth.route';
import { indexRouter } from '../routes/index.route';
import { errors } from '../middlewares/errors';
const helmet = require("helmet")
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const swaggerUi = require('swagger-ui-express')
import { swaggerDoc } from '../swagger/info';
require('dotenv').config()

export default (app: Application) => {

    const SERVER_PREFIX = process.env.SERVER_PREFIX

    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    /*swagger config*/
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    app.use(cookieParser());

    app.use(`/${SERVER_PREFIX}`, indexRouter);
    app.use(`/${SERVER_PREFIX}/crud`, crudRouter);
    app.use(`/${SERVER_PREFIX}/auth`, authRouter);
    
    app.use(errors);
}