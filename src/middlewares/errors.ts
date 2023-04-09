import {Request, Response, NextFunction} from 'express';

export function errors(error:Error , req:Request , res: Response, next: NextFunction){
    const errorBody = {
        status: 500,
        message: 'failed',
        body: error.message
    }
    return res.status(500).json(errorBody);
}