
import { User } from "../models/user.js";
import bcrypt from "bcrypt";

import {cookiesSend} from "../util/feature.js"
import ErrorHandler from "../middleware/ErrorHandeler.js";

export const getAllUsers=async (req, res) => {};

export const getUserBYId=async(req,res)=>{

    
    res.status(201).json({success:true,user:req.user});


};

//loging 

export const login=async(req,res,next)=>{

    const {email,password}=req.body;

    const user=await User.findOne({email}).select("+password")

    if (!user){
         return next(new ErrorHandler("Invalid User ID and Password",404))
        }

        const ismatch=await bcrypt.compare(password,user.password);
    
    if (!ismatch){
        return next(new ErrorHandler("Invalid Password",404))
         }
    cookiesSend(res,user,"loging successfully",201);
};

//register


export const newUser= async (req, res,next) => {
    const {name,email,password}=req.body;

    let user=await User.findOne({email});

    console.log(user); 

    if (user){ return next(new ErrorHandler("User already Exist",404))}

    const hashPassword=await bcrypt.hash(password,10);

    user =await User.create({name,email,password:hashPassword})
    
    cookiesSend(res,user,"Register Sucessfully",201);

};

//logout
export const logout=(req, res) => {
    res.cookie("token","",{expires:new Date(Date.now()),sameSite:process.env.Node_ENV==="Development"?"lax":"none",Secure:process.env.Node_ENV==="Development"?false:true}).json({success:true});
};