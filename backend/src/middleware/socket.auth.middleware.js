import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ENV } from "../cofig/index.js";

export const socketAuthMiddleware = async (socket, next) => {
    try {
        const token = socket.handshake.headers.cookie
        ?.split("jwt=")[1]
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];

        if (!token) {
            console.log("Socket connection rejected: No token provided in socket handshake");
            return next(new Error("Not authorized, no token provided"));
        }

        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded) {
            console.log("Socket connection rejected: Invalid token");
            return next(new Error("Not authorized, Invalid token"));
        }   

        const user = await User.findById(decoded.UserId).select("-password");
        if (!user) {
            console.log("Socket connection rejected: User not found");
            return next(new Error("User not found"));
        }

        socket.user = user;
        socket.UserId = user._id.toString();  

        console.log(`Socket connection authorized for user: ${user.fullName} ${user._id}`);
        next();
    } catch (error) {
        console.log("Error in socketAuthMiddleware:", error);
        next(new Error("Unauthorized: Authentication failed"));
    }
};