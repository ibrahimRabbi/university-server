import { Schema, model } from "mongoose";
import { UserInterface } from "./user.interface";
import bcrypt from 'bcrypt'


export const userSchema = new Schema<UserInterface>(
    {
        rollId: { type: String, required:true, unique: true },
        role: { type: String, required: true, enum: ['student', 'faculty', 'admin'] },
        email: { type: String, required: true, unique: true },
        password: { type: String, trim: true },
        status: { type: String, enum: ['in-progress', 'blocked'], default:'in-progress' },
        isDeleted: { type: Boolean, default: false }
    },
    { timestamps: true })


userSchema.pre('save', async function (next) {
    const data = await bcrypt.hash(this.password as string, 6)
    this.password = data
    next()
})


export const userModel = model<UserInterface>('users', userSchema)