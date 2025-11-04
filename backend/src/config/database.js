import mongoose from "mongoose"
import { ENV } from "./index.js";   

export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV.env;
        if (!MONGO_URI) throw new Error("MONGO URI is not set");
        
        await mongoose.connect(ENV.env.MONGO_URI)
        console.log("MONGODB CONNECTED")
    } catch (error) {
        console.log("Error connecting to MongoDB:", error)
        ENV.exit(1);
    }
}