import mongoose from "mongoose"
import { studentModel } from "./student.model"
import { userModel } from "../users/user.model"




//get all student with included referencing feild
export const getAllStudentService = async () => {
    const finded = await studentModel.find().populate('userId').populate('semesterId')
    return finded
}


//delte student and user API
export const deleteStudentService = async (roll: string) => {
    const sesssion = await mongoose.startSession()

    try {
        sesssion.startTransaction()
        const deleting = await userModel.findOneAndUpdate({ studentRoll: roll }, { isDeleted: true })

        await sesssion.commitTransaction()
        await sesssion.endSession()
        return deleting

    } catch (err: any) {
        await sesssion.abortTransaction()
        await sesssion.endSession()
        return err
    }

}