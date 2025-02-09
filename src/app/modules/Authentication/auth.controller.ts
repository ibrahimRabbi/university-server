import { NextFunction, Request, Response } from "express";
import { loginService } from "./auth.services";
import envData from "../../config/config";




export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await loginService(req.body)
        res.cookie('refreshToken',token,{secure:true})
        res.status(200).json({ success: true, token })
    } catch (err: any) {
        next(err)
    }
}