import { NextFunction, Request, Response } from "express";
import { courseService, getCourseService } from "./course.services";


export const courseController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await courseService(req.body)
        res.status(200).json({success:true,insertData:created})
    } catch (err: any) {
        next(err)
     }
}


export const getAllcourse  = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await getCourseService()
        res.status(200).json({ success: true, insertData: created })
    } catch (err: any) {
        next(err)
    }
}

