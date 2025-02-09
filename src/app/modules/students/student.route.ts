import { Router } from "express";
import { deleteStudent, getallStudents, updateStudent } from "./student.controller";
import authValidate from "../../middleware/auth.middleware";

export const StudentRoute = Router()

StudentRoute.get('/get-student',authValidate, getallStudents)

StudentRoute.delete('/delete-student/:roll', deleteStudent)

StudentRoute.patch('/update-student/:roll', updateStudent)