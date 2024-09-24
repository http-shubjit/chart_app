import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.route.js";
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connectDB from "./db/connectDB.js";

dotenv.config();

const app=express()

connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes);




app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
