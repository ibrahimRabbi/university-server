import express from 'express'
import { createStudent, getAlluserController } from './user.controller'
import studentValidation from '../../middleware/studentMiddle'


export const route = express.Router()


route.post('/create-student', studentValidation, createStudent)

route.get('/get-user',getAlluserController)
