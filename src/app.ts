import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import envData from './app/config/config';
import { route } from './app/modules/users/user.route';
import { globalErrorHandle } from './app/middleware/globalErrMiddle';
import notFounds from './app/middleware/notFound';
import { semeterRoute } from './app/modules/semester/semester.route';
import { StudentRoute } from './app/modules/students/student.route';
import { courseRoute } from './app/modules/course/course.route';
import { registerdSemesterRoute } from './app/modules/registerdCourse/registerdSemester.route';
import { authRoute } from './app/modules/Authentication/auth.route';

 


const app = express()
app.use(cors())
app.use(express.json())

//routes
app.use('/api/user', route)
app.use('/api/semester', semeterRoute)
app.use('/api/student', StudentRoute)
app.use('/api/course',courseRoute)
app.use('/api/regesterd', registerdSemesterRoute)
app.use('/api/auth',authRoute)

//error handle middleware
app.use(globalErrorHandle)
app.use(notFounds)

async function main() {
    await mongoose.connect(envData.databaseUrl as string);

    app.listen(envData.port, () => {
        console.log(`server is run on ${envData.port}`)
    })

}

main()