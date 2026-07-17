import mongoose from "mongoose";
import config from "./config.js";

export async function connectDB() {
    try{
        mongoose.connect(config.MONGODB_URI);
        console.log("Database connected successfully")
    }catch(err){
        console.error("Couldn't connect to database")
    }
}