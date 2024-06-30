import { Router } from "express";
import { createregisterdSemester, getreRisterdSemester } from "./registerdSemester.controller"; 

export const registerdSemesterRoute = Router()

registerdSemesterRoute.post('/create-regesterd', createregisterdSemester)

registerdSemesterRoute.get('/get-regesterd',getreRisterdSemester)