import { Types } from "mongoose"

 

export type FacultyNameInterface = {
    first: string,
    last: string
}

export type FacultyInterface = {
    password?: string,
    userId: Types.ObjectId,
    rollId: string,
    name: FacultyInterface,
    age: number,
    present_address: string,
    permanent_address: string,
    contact: string,
    email: string,
    blood: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'AB+',
    isDeleted: boolean
}