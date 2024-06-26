import { NextFunction, Request, Response } from 'express';
 
 

export const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {
 
    let statusCode = 400;
    let message = err.message ||  'something went wrong';
    let errorSource: object[] = [{
        path: '',
        message:'something went wrong'
    }]
     

    if (err.details?.length) { 
        const formatting = err.details.map((issue:any)=> {
            return {
                path: issue.path[0],
                message: issue.message
            }
        })
        message = 'Joi Validation error'
        errorSource = formatting
    }


    if (err?.message.includes('ValidationError')) {
        message = 'moongose Validation error'
        errorSource = [{
            path: err?.message.slice(16, 20).trim(),
            message: err.message
        }]
    }
    
    return res.status(statusCode).json({
        success: false,
        message ,
        errorSource,
    })
}