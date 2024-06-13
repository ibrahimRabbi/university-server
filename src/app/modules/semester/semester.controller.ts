import { NextFunction, Request, Response } from "express";
import { semeterServices } from "./semester.services";



const semesterController = async (req:Request,res:Response,next:NextFunction) => {
     try {
          const inserted = await semeterServices(req.body)
          res.status(200).json({ success: true, insertedData: inserted })
     } catch (err: any) {
          next(err)
     }
};

export default semesterController;