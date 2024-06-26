import { Router } from "express";
import { deleteStudent, getallStudents, updateStudent } from "./student.controller";

export const StudentRoute = Router()

StudentRoute.get('/get-student', getallStudents)

StudentRoute.delete('/delete-student/:roll', deleteStudent)

StudentRoute.patch('/update-student/:roll', updateStudent)