import { Schema, model } from "mongoose";
import { UserInterface } from "./user.interface";
import bcrypt from 'bcrypt'


export const userSchema = new Schema<UserInterface>(
    {
        studentRoll: { type: String,required:true},
        password: { type: String, trim: true },
        email:{type:String,required:true,unique:true},
        role: { type: String, required: true, enum: ['student', 'faculty', 'admin'] },
        status: { type: String, enum: ['pendding', 'blocked'], default:'pendding' },
        isDeleted: { type: Boolean, default: false }
    },
    { timestamps: true })


userSchema.pre('save', async function (next) {
    const data = await bcrypt.hash(this.password as string, 6)
    this.password = data
    next()
})


export const userModel = model<UserInterface>('users', userSchema)