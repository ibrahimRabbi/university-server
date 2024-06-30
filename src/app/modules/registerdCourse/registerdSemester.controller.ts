import { NextFunction, Request, Response } from "express";
import { createRegisterdSemesterService, getRegisterdSemesterService } from "./registerdSemester.services";


export const createregisterdSemester = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const created = await createRegisterdSemesterService(req.body)
        res.status(200).json({ success: true, insertData: created })
    } catch (err: any) {
        next(err)
    }
}


export const getreRisterdSemester = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created = await getRegisterdSemesterService()
        res.status(200).json({ success: true, Data: created })
    } catch (err: any) {
        next(err)
    }
}