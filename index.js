import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDb from "./config/mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const allowOrigin =["https://mentorship-frontend-6skq-git-main-oluchi-ogbu-oji-s-projects.vercel.app/","http://localhost:5173/"]
app.use(cors({
    origin:"allowOrigin",
    credentials:true,
    methods:["GET","PUT","DELETE","POST"],
    allowedHeaders:["content-type", "Authorization"]
}))
app.use("/api/auth",AuthRoutes);
app.use("/api/profile",profileRoutes);

app.get("/" , (req,res)=>{
    res.json({message:"welcome to backend"});
})
// connect to database
connectDb();
app.listen(8000, ()=>{
console.log("server is running")
}); 