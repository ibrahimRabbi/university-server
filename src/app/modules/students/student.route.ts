import { Router } from "express";
import { deleteStudent, getallStudents } from "./student.controller";

export const StudentRoute = Router()

StudentRoute.get('/get-student', getallStudents)

StudentRoute.delete('/delete-student/:roll', deleteStudent)