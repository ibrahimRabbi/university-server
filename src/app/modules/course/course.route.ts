import { Router } from "express";
import { courseController, getAllcourse } from "./course.controller";

export const courseRoute = Router()

courseRoute.post('/create-course', courseController)

courseRoute.get('/get-course',getAllcourse)