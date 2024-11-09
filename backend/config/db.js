import mongoose from "mongoose";

export const  connectDB = async()=>{
    await mongoose.connect('mongodb+srv://aakashnkt99:1926202@cluster1.ztoad.mongodb.net/food-del').then(()=>console.log("DB connected"));
}