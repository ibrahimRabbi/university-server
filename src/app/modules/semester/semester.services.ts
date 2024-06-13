import { SemesterInterface } from "./semester.interface";
import { semesterModel } from "./semester.model";


export const semeterServices = async (data:SemesterInterface)=>{

    const inserting = await semesterModel.create(data)
    return inserting
}