import { Tcoures } from "./course.interface";
import { courseModel } from "./course.model";

export const courseService = async (payload: Tcoures) => {
    const inserting = await courseModel.create(payload)
    return inserting
}


export const getCourseService = async () => {
    const inserting = await courseModel.find().populate({
        path: "prerequisite",
        populate: "couresId"
    })
    return inserting
}