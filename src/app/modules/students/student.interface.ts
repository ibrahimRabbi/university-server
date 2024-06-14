import { Types } from "mongoose"

export type NameInterface = {
    first: string,
    last: string
}

export type StudentInterface = {
    password?: string,
    userId: Types.ObjectId,
    semesterId: Types.ObjectId
    name:NameInterface,
    age: number,
    present_address: string,
    permanent_address: string,
    contact: string,
    email:string,
    subject: string,
    blood: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'AB+'
}