import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { months, semesterName } from "../modules/semester/semester.model";



const semesterMiddle = (req: Request, res: Response, next: NextFunction) => {

    try {
        const semesterSchema = Joi.object({
            name: Joi.string().valid(...semesterName).required(),
            code: Joi.string().valid('01', '02', '03').required(),
            year: Joi.date().required(),
            startMonth: Joi.string().valid(...months).required(),
            endMonth: Joi.string().valid(...months).required()
        });

        const { error, value } = semesterSchema.validate(req.body)
        if (error) {
            return next(error)
        } 
            return next()
       
    } catch (err: any) {
        next(err)
    }
};

export default semesterMiddle;