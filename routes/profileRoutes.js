import express from "express";
import {getUserData, EditProfile} from "../controller/profile.js";
import { authMiddleware } from "../middleware/authMiddleware.js";



const profileRoutes = express.Router()

profileRoutes.get("/getUserData/:id", authMiddleware, getUserData);
profileRoutes.put("/EditProfile/:id", authMiddleware, EditProfile);

export default profileRoutes;