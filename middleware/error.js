export const error=(err,req,res,next)=>{
    err.message=err.message||"Internal System Error"
    err.statusCode=err.statusCode||500
    return res.status(err.statusCode).json({success:false,message:err.message,statusCode:err.statusCode});
    
}