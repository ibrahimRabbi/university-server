import mongoose from "mongoose";
import envData from "../../config/config";
import genereteRoll from "../../utility/genereteRoll";
import { StudentInterface } from "../students/student.interface";
import { studentModel } from "../students/student.model";
import { UserInterface } from "./user.interface";
import { userModel } from "./user.model";
import { semesterModel } from "../semester/semester.model";


export const studentService = async (studentData: StudentInterface) => {

    const session = await mongoose.startSession()
    const findSemeter = await semesterModel.findById({ _id: studentData.semesterId })
    const generetedRoll = genereteRoll(findSemeter)
    const user: Partial<UserInterface> = {
        password: studentData.password || envData.defaultPass,
        email: studentData.email,
        role: 'student',
        studentRoll: await generetedRoll,
    }



    try {
        session.startTransaction()

        const insertingUser = await userModel.create([user], { session })
        if (!insertingUser.length) {
            throw new Error('user cant created successfully')
        }



        studentData.userId = insertingUser[0]._id
        studentData.roll = await generetedRoll


        const insetStudent = await studentModel.create([studentData], { session })
        if (!insetStudent.length) {
            throw new Error('student cant create successfully')
        }

        await session.commitTransaction()
        await session.endSession()
        return insetStudent

    } catch (err: any) {
        return err
    }

}

export const getAlluserService = async () => {
    const finding = await userModel.find()
    return finding
}