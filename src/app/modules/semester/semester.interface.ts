import { Types } from "mongoose";

export type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type SemesterName = 'autumn' | 'summer' | 'fall'

export type SemesterInterface = {
    _id?: Types.ObjectId,
    name: SemesterName,
    code: '01' | '02' | '03',
    year: Date,
    startMonth: Months,
    endMonth: Months
}