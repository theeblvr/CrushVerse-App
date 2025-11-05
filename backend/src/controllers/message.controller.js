import cloudinary from "../config/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getAllContacts = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getAllContacts controller:", error);
        res.status(500).json({ message: "Internal server error" }); 
    }
};

export const getMessagesByUserId = async (req, res) => {
    try {
        const myId = req.user._id;
        const {id: UserToChatId} = req.params;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: UserToChatId },
                { senderId: UserToChatId, receiverId: myId }
            ]
        });
        res.status(200).json(messages); 
    } catch (error) {
        console.log("Error in getMessagesByUserId controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const {text, image} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if (image) {
            const uploadResponse = await uploadImageToCloud(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        });

        await newMessage.save();
        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("Error in sendMessage controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getChatPartners = async (req, res) => {};