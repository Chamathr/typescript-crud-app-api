import express, { Application } from 'express';
import cors from 'cors';
import { crudRouter } from '../routes/crud.route';
import { errors } from '../middlewares/errors';
import helmet from "helmet"
import cookieParser from 'cookie-parser'
import logger from 'morgan'

export default (app: Application) => {
    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded());
    app.use(cookieParser());
    app.use('/api/v1/crud/', crudRouter);
    app.use(errors);
}