import { NextFunction, Request, Response } from "express";
import { deleteStudentService, getAllStudentService, updateStudentService } from "./student.services";



//get all student with included referencing feild
export const getallStudents = async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query
   
     
    try {
        if (req.user.role !== 'faculty') {
             throw new Error('unauthorized Access')
        }
        const getData = await getAllStudentService(query)
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

//update document
export const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roll = req.params.roll
        const update = await updateStudentService(roll, req.body)
        res.status(200).json({ status: true, data: update })
    } catch (err: any) {
        next(err)
    }

}



