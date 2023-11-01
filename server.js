import  Express  from "express";
import todoRoute from "./routes/todoRoutes.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors"


const app = Express()

app.use(Express.json())
config()
app.use(cors())
app.use(todoRoute)


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MONGODB connection done")
})
.catch((err)=>{
    console.log("error")
})

app.listen(5000,()=>{
    console.log("listen to PORT 5000")
})