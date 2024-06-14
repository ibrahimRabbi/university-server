import { ObjectId } from "mongoose";
import envData from "../../config/config";
import genereteRoll, { previous } from "../../utility/genereteRoll";
import { StudentInterface } from "../students/student.interface";
import { studentModel } from "../students/student.model";
import { UserInterface } from "./user.interface";
import { userModel } from "./user.model";
import { semesterModel } from "../semester/semester.model";


export const studentService = async (studentData: StudentInterface) => {

    const findSemeter = await semesterModel.findById({ _id: studentData.semesterId })

    let generetedRoll = genereteRoll(findSemeter)
    
    const user: Partial<UserInterface> = {
        password: studentData.password || envData.defaultPass,
        email: studentData.email,
        role: 'student',
        studentRoll: await generetedRoll ,
    }
    const inserting = await userModel.create(user)

    if (inserting.role) {
        studentData.userId = inserting._id


        const insetStudent = await studentModel.create(studentData)
        return insetStudent
    }
}