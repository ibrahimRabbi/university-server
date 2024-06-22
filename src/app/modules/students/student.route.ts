import { Router } from "express";
import { getallStudents } from "./student.controller";

export const StudentRoute = Router()

StudentRoute.get('/get-student', getallStudents)