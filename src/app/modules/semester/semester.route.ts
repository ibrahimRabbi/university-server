import express from 'express'
import semesterMiddle from "../../middleware/semesterMiddle";
import semesterController from "./semester.controller";

export const semeterRoute = express.Router()
semeterRoute.post('/semester', semesterMiddle, semesterController)