import { NextFunction, Request, Response } from "express";
import Joi from "joi";


const studentValidation = (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const nameValidation = Joi.object({
            first: Joi.string().required(),
            last: Joi.string().required()
        })
      const joiValidation = Joi.object({
            password: Joi.string().trim().optional(),
            name: nameValidation.required(),
            age: Joi.number().integer().required().max(40),
            present_address: Joi.string().required(),
            permanent_address: Joi.string().required(),
            contact: Joi.string().trim().required().max(11),
            email: Joi.string().email().required(),
            subject: Joi.string().required(),
            blood: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'O+', 'AB+').required()
       })
        const { error, value } = joiValidation.validate(req.body)
        if (error) {
            return next(error)
        } else {
           return next() 
       }
    } catch (err: any) {
        return next(err)
    }


}

export default studentValidation