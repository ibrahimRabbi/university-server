import { Schema, model } from "mongoose";
import { NameInterface, StudentInterface } from "./student.interface";

const nameSchema = new Schema<NameInterface>({
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true }
})

const studentSchema = new Schema<StudentInterface>({
    password: { type: String, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    semesterId: { type: Schema.Types.ObjectId, ref: 'semester', required: true },
    rollId:{type:String,required:true,unique:true},
    name: { type: nameSchema, required: true },
    age: { type: Number, required: true, max: 40 },
    present_address: { type: String, required: true },
    permanent_address: { type: String, required: true },
    contact: { type: String, required: true, trim: true, maxlength: 11 },
    email: { type: String, required: true, unique: true, trim: true },
    subject: { type: String, required: true },
    blood: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'AB+'], required: true },
    isDeleted: { type: Boolean, default: false }
},{timestamps:true})

export const studentModel = model<StudentInterface>('students', studentSchema)