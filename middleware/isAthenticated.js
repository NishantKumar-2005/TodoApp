import {User} from "../models/user.js";
import jwt from "jsonwebtoken";
export const isAnthenticated=async(req,res,next)=>{
    const {token} = req.cookies; // Assuming 'token' is the name of your JWT cookie

    if(!token){
        return next(new Error("Loging First"))
    }
    const decoded=jwt.verify(token,process.env.JWt_secert)
    req.user=await User.findById(decoded._id);
    next();
}