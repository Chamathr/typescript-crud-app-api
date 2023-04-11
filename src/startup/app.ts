import express, { Application } from 'express';
const cors = require('cors');
import { crudRouter } from '../routes/crud.route';
import { errors } from '../middlewares/errors';
const helmet = require("helmet")
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const swaggerUi = require('swagger-ui-express')
import { swaggerDoc } from '../swagger/info';

export default (app: Application) => {
    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());

    /*swagger config*/
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    app.use(cors());
    app.use(express.urlencoded());
    app.use(cookieParser());
    app.use('/api/v1/crud/', crudRouter);
    app.use(errors);
}