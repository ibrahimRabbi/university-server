import { Schema, model } from "mongoose";
import { TregisterdSemeter } from "./registerdSemester.interface";


const registerdSemesterSchema = new Schema<TregisterdSemeter>({
    semesterId: { type: Schema.Types.ObjectId, ref: "semesters", required: true },
    status: { type: String, enum: ["UPCOMING", "ONGOING", "ENDED"], required: true },
    minCradit: { type: Number, required: true },
    maxCredit: { type: Number, required: true },
})

export const registerdSemesterModel = model('registerdSemester',registerdSemesterSchema)