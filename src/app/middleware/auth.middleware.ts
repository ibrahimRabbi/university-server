import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import envData from "../config/config";


const authValidate = (req:Request,res:Response,next:NextFunction) => {
    const token = req.headers?.authorization;

    if (!token) {
        throw new Error('unathorized error')
    }

    jwt.verify(token as string, envData?.secretKey as string, function (err, decoded) {
        if (err) {
            throw new Error('unathorized error')
        }
        req.user = decoded as JwtPayload
 
    });

    next()
}

export default authValidate