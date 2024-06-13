import { NextFunction, Request, Response } from 'express';

export const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(400).json({
        success: false,
        error: err.message,
        message:'something went wrong'
    })
}