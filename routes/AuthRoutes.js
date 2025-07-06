import {get} from "mongoose";
import { register, login, logout, getUserData} from "../controller/auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";
const AuthRoutes = express.Router()

AuthRoutes.post("/register",register);
AuthRoutes.post("/login",login);
AuthRoutes.post("/logout",logout);
AuthRoutes.get("/getUserData/:id",getUserData);


export default AuthRoutes;