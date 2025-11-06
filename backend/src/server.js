import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./config/database.js";
import { ENV } from "./config/index.js";
import { app, server } from "./config/socket.js";


const PORT = ENV.PORT || 3000;

app.use(express.json())
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
    connectDB()
});