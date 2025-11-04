import jwt from "jsonwebtoken";
import { ENV } from "./index.js";

export const generateToken = (userId, res) => {
    const { JWT_SECRET } = ENV;
    if (!JWT_SECRET) {
        throw new Error("JWT is not configured");
    }

    const token = jwt.sign({payload:userId}, JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        http: true, // prevents XSS attacks
        sameSite: "strict", // prevents CSRF attacks
        secure: ENV.NODE_ENV === "development" ? false : true,
    });

    return token;
};