import { NextFunction, Request, Response } from "express";
import { facultyService, getAlluserService, studentService } from "./user.services";



export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inserted = await studentService(req.body)
        res.status(200).json({ success: true, insertedData: inserted })
    } catch (err: any) {
        next(err)
    }

}


export const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inserted = await facultyService(req.body)
        res.status(200).json({ success: true, insertedData: inserted })
    } catch (err: any) {
        next(err)
    }

}





export const getAlluserController = async (req: Request, res: Response, next: NextFunction) => {
     
    try {
        if (req.user.role !== 'admin') {
            throw new Error('unauthorized access user')
        }

        const finded = await getAlluserService()
        res.status(200).json({ success: true, data: finded })
    } catch (err: any) {
        next(err)
    }
}