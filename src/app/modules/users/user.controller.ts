import { NextFunction, Request, Response } from "express";
import { studentService } from "./user.services";



export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inserted = await studentService(req.body)
        res.status(200).json({ success: true, data: inserted })
    } catch (err: any) {
        next(err)
    }

}