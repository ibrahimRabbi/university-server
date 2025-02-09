import { SemesterInterface } from "./semester.interface";
import { semesterModel } from "./semester.model";


export const semeterServices = async (data: SemesterInterface) => {
    const checkBefore = await semesterModel.findOne({
        $and: [
            { name: data.name },
            { year: data.year }
        ]
    })

    if (checkBefore) {
        throw new Error('semester already exist')
    }
    const inserting = await semesterModel.create(data)
    return inserting
}