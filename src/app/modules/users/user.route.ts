import express from 'express'
import { createFaculty, createStudent, getAlluserController } from './user.controller'
import studentValidation from '../../middleware/studentMiddle'


export const route = express.Router()


route.post('/create-student', studentValidation, createStudent)

route.post('/create-faculty', createFaculty)

route.get('/get-user',getAlluserController)
