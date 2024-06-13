import envData from "../../config/config";
import { StudentInterface } from "../students/student.interface";
import { studentModel } from "../students/student.model";
import { UserInterface } from "./user.interface";
import { userModel } from "./user.model";
import uniqid from 'uniqid';

export const studentService = async (studentData: StudentInterface) => {

    const user: Partial<UserInterface> = {
        password: studentData.password || envData.defaultPass,
        email: studentData.email,
        role: 'student',
        slugId: uniqid()
    }
    const inserting = await userModel.create(user)

    if (inserting.role) {
        studentData.userId = inserting._id
        studentData.slugId = inserting.slugId
 
        const insetStudent = await studentModel.create(studentData)
        return insetStudent
    }
}