import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { error } from "./middleware/error.js";


export const  app = express();

config({
    path:"./data/config.env"
})




//middelware

app.use(express.json()); // Body parser middleware
app.use(cookieParser()); // Cookie parser middleware
app.use('/users', userRouter); // Your route handlers
app.use('/task', taskRouter); 
app.use(error)


app.get("/", (req, res) => {
    res.send("Nice working");
})



