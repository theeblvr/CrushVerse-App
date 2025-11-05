import mongoose from "mongoose";
import { ENV } from "./index.js";   

export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV;
        if (!MONGO_URI) throw new Error("MONGO URI is not set");
        
        await mongoose.connect(ENV.MONGO_URI)
        console.log("MONGODB CONNECTED")
    } catch (error) {
        console.log("Error connecting to MongoDB:", error)
        process.exit(1);
    }
};