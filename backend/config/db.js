import mongoose from "mongoose";

export const  connectDB = async()=>{
    await mongoose.connect('mongodb+srv://aakashnkt99:aakash123@cluster1.j6xyg.mongodb.net/Aakash retryWrites=true&w=majority&appName=Cluster1').then(()=>console.log("DB connected"));
}