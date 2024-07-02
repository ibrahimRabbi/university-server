import mongoose from "mongoose";
import envData from "../../config/config";
import genereteRoll from "../../utility/genereteRoll";
import { StudentInterface } from "../students/student.interface";
import { studentModel } from "../students/student.model";
import { UserInterface } from "./user.interface";
import { userModel } from "./user.model";
import { semesterModel } from "../semester/semester.model";
import { FacultyInterface } from "../faculty/faculty.interface";
import { facultyModel } from "../faculty/faculty.model";



//create user and student API
export const studentService = async (studentData: StudentInterface) => {

    const session = await mongoose.startSession()
    const findSemeter = await semesterModel.findById({ _id: studentData.semesterId })
    const generetedRoll = await genereteRoll(findSemeter)

    const user: Partial<UserInterface> = {
        password: studentData.password || envData.defaultPass,
        email: studentData.email,
        role: 'student',
        rollId: generetedRoll,
    }



    try {
        session.startTransaction()
 
        const insertingUser = await userModel.create([user], { session })
        if (!insertingUser.length) {
            throw new Error('user cant created successfully')
        }



        studentData.userId = insertingUser[0]._id
        studentData.rollId = generetedRoll


        const insetStudent = await studentModel.create([studentData], { session })
        if (!insetStudent.length) {
            throw new Error('student cant create successfully')
        }

        await session.commitTransaction()
        await session.endSession()
        return insetStudent

    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(err)
    }

}



export const facultyService = async (payload: FacultyInterface) => {
    const session = await mongoose.startSession()

    try {
        session.startTransaction()

        const previousFaculty = await userModel.findOne({ role: 'faculty' }).sort({ createdAt: -1 })
        const separateNumber: string = previousFaculty?.rollId.slice(2) as string
        const incriment: number = parseInt(separateNumber) + 1
        const initial: string = incriment.toString().padStart(4, '0')
        const makeId = `F-${initial}`

        const facultuUser: Partial<UserInterface> = {
            role: 'faculty',
            password: payload.password || envData.defaultPass,
            rollId: makeId,
            email: payload.email,
        }

        const createfacultyUser = await userModel.create([facultuUser],{new:true,session:session})

        payload.userId = createfacultyUser[0]._id
        payload.rollId = createfacultyUser[0].rollId

        const createfaculty = await facultyModel.create([payload],{new:true,session:session})


        await session.commitTransaction()
        await session.endSession()
        return createfaculty

    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(err)
}
    
     

    

   

}










//get all user
export const getAlluserService = async () => {
    const finding = await userModel.find()
    return finding
}