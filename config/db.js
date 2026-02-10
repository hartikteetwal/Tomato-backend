import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGOOB_URI).then(()=>console.log("DB Connected"))
}
