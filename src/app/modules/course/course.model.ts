import { Schema, model } from "mongoose";
import { Prerequisite, Tcoures } from "./course.interface";

const preRequisiteSchema = new Schema<Prerequisite>({
    couresId: { type: Schema.Types.ObjectId, ref: 'course', required: true},
    isDeleted: { type: Boolean, default: false }
})

const courseSchema = new Schema<Tcoures>({
    title: { type: String, required: true, trim: true },
    prefix: { type: String, required: true, trim: true, unique: true },
    code: { type: Number, required: true, unique: true },
    credit: { type: Number, required: true},
    prerequisite: [preRequisiteSchema]
},{timestamps:true})

export const courseModel = model<Tcoures>('course',courseSchema)