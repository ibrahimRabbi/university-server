import { NextFunction, Request, Response } from "express";
import { deleteStudentService, getAllStudentService } from "./student.services";



//get all student with included referencing feild
export const getallStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getData = await getAllStudentService()
        res.status(200).json({ status: true, data: getData })
    } catch (err: any) {
        next(err)
    }
}

//soft deleted
export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roll = req.params.roll
        const deleted = await deleteStudentService(roll)
        res.status(200).json({ status: true, data: deleted })
    } catch (err: any) {
        next(err)
    }
    
}


