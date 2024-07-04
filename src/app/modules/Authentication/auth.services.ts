import { userModel } from "../users/user.model";
import { Tauth } from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import envData from "../../config/config";



export const loginService = async (payload: Tauth) => {
    const isExistUser = await userModel.findOne({ rollId: payload.rollId })
    const isValidPassword = await bcrypt.compare(payload.password, isExistUser?.password as string)


    if (!isExistUser) {
        throw new Error('unauthorized user')
    }

    if (!isValidPassword) {
        throw new Error('unauthorized User password is not valid')
    }

    const genarateAccessToken = jwt.sign(payload, envData?.secretKey as string, { expiresIn: '5h' })
    return genarateAccessToken

}