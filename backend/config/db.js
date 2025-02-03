import mongoose from "mongoose";

export const  connectDB = async()=>{
    await mongoose.connect('mongodb+srv://aakashnkt99:aakash123@cluster1.j6xyg.mongodb.net/Aakash?retryWrites=true&w=majority').then(()=>console.log("DB connected"));
}