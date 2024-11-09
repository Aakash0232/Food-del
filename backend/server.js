import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"



// app config
const app=express()
const port=4000

// middleware
app.use(express.json())
app.use(cors())

// db connection 
connectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://aakashnkt99:1926202@cluster1.ztoad.mongodb.net/?