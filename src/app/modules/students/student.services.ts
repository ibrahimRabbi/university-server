import mongoose from "mongoose"
import { studentModel } from "./student.model"
import { userModel } from "../users/user.model"








//get all student with included referencing feild
export const getAllStudentService = async (query: Record<string, unknown>) => {

console.log(query)
    const snapshotofQuery = { ...query }
    const excludequeries = ["searchTram", 'limit', 'sort','feilds']
    excludequeries.forEach((el) => delete snapshotofQuery[el])

    const searchFeild = ["name.first", "name.last", "email"]
    let searchTram = '';
    let sort = '-createdAt';
    let selectFeild = '';

    if (query.searchTram) {
        searchTram = query.searchTram as string
    }

    if (query.sort) {
        sort = '-createdAt'
    }

    if (query.feilds) {
        const data = query.feilds as string
        selectFeild = data.split(',').join(' ') 
    }

    const searchquery = studentModel.find({
        $or: searchFeild.map((feild) => {
            return { [feild]: { $regex: searchTram, $options: 'i' } }
        })
    })

    const finded = await searchquery.find(snapshotofQuery)
        .populate('userId').populate('semesterId').sort(sort).limit(1).select(selectFeild)
    return finded
}









//delte student and user API
export const deleteStudentService = async (roll: string) => {
    const session = await mongoose.startSession()

    try {
        session.startTransaction()
        const deletingUser = await userModel.findOneAndUpdate({ studentRoll: roll }, { isDeleted: true }, { new: true, session: session })
        if (!deletingUser) {
            throw new Error()
        }

        const deletingStudent = await studentModel.findOneAndUpdate({ studentRoll: roll }, { isDeleted: true }, { new: true, session: session })
        if (!deletingStudent) {
            throw new Error()
        }


        await session.commitTransaction()
        await session.endSession()
        return [deletingUser, deletingStudent]

    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        return err
    }

}










//update student and user
export const updateStudentService = async (roll: string, data: any) => {
    const session = await mongoose.startSession()
    const { name, ...premetive } = data

    try {
        session.startTransaction()
        let updatedDoc = {
            ...premetive
        }

        if (name && Object.keys(name).length) {

            for (const [key, value] of Object.entries(name)) {
                updatedDoc[`name.${key}`] = value
            }

        }
        console.log(updatedDoc)
        const updating = await studentModel.findOneAndUpdate({ studentRoll: roll }, updatedDoc, { new: true, session: session })


        await session.commitTransaction()
        await session.endSession()
        return updating


    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        return err
    }
}