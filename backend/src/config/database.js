import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const { MONGO_URI } = process.env;
        if (!MONGO_URI) throw new Error("MONGO URI is not set");
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED")
    } catch (error) {
        console.log("Error connecting to MongoDB:", error)
        process.exit(1);
    }
}