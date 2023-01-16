import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";



export const register = async(req, res) => {
    try {
        // destructure the mongo model
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
        // encryption to encrypt password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        // new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password : passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 500),
            impressions: Math.floor(Math.random() * 500)       

        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}