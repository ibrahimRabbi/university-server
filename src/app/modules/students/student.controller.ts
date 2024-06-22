import { NextFunction, Request, Response } from "express";
import { studentModel } from "./student.model";


export const getallStudents = async (req:Request,res:Response,next:NextFunction) => {
    const finded = await studentModel.find().populate('userId').populate('semesterId') 
    res.send(finded)
}