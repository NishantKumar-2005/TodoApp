import Jwt  from "jsonwebtoken";

export const cookiesSend=(res,User,message,statusCode=200)=>{
    const token=Jwt.sign({_id:User._id},process.env.JWt_secert);

    console.log(token);
    res.cookie("token",token,{httpOnly:true,maxAge:15*60*1000,sameSite:process.env.Node_ENV==="Development"?"lax":"none",secure: process.env.NODE_ENV === "production"?true:false});
    res.status(statusCode).json({success:true,message});
}