import { Schema, model } from "mongoose";
import { Months, SemesterInterface, SemesterName } from "./semester.interface";

export const months: Months[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const semesterName: SemesterName[] = ["autumn", "summer", "fall"]



const semesterSchema = new Schema<SemesterInterface>({
    name: { type: String, enum: semesterName, required: true },
    code: { type: String, enum: ['01', '02', '03'], required: true },
    year: { type: Date, required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true }
})

semesterSchema.pre("save", function (next) {

    const semesterObj = {
        autumn: "01",
        summer: "02",
        fall: "03"
    }
    try {
        if (this.code !== semesterObj[this.name]) {
          throw new Error('wrong credit')
        } else {
            next()
        }
    } catch (err: any) {
        next(err)
}
    
//or
//     const prac2 = <param1, param2 extends keyof param1>(a: param1, b: param2) => {
//         try {
//             if (this.code !== a[b]) {
//                 throw new Error('wrong credit')
//             } else {
//                 console.log('hello world')
//             }
//         } catch (err: any) {
//             next(err)
       
//  }
//     }

//     prac2(semesterObj, this.name )
})

export const semesterModel = model<SemesterInterface>('semester', semesterSchema)














//console.log(Object.keys(semesterObj))
// const seasons = { autumn: 'Autumn', summer: 'Summer', fall: 'Fall' };
// for (const [seasonKey, seasonValue] of Object.entries(seasons)) {
//     console.log(`${seasonKey}: ${seasonValue}`);
// }

