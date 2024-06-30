import { TregisterdSemeter } from "./registerdSemester.interface";
import { registerdSemesterModel } from "./registerdSemester.model";


export const createRegisterdSemesterService = async (payload: TregisterdSemeter) => {
    const findPrevious = await registerdSemesterModel.findOne({ 
        $and: [
            { semesterId: payload.semesterId },
            {status:payload.status}
        ]
     })
    if (findPrevious) {
        throw new Error('this semester alredy exist')
    }
    
    const inserting = await registerdSemesterModel.create(payload)
    return inserting
}


export const getRegisterdSemesterService = async () => {
    const inserting = await registerdSemesterModel.find().populate("semesterId")
    return inserting
}