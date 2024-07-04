
import { Router } from "express";
import { loginController } from "./auth.controller";

export const authRoute = Router()

authRoute.post('/login',loginController)