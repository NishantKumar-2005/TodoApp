import ErrorHandler from "../middleware/ErrorHandeler.js";
import { Task } from "../models/task.js"

export const newtask=async(req,res,next)=>{
    const {titel,Discribtion}=req.body
    await Task.create({titel,Discribtion,user:req.user})
    res.status(201).json({success:true,message:"task added"});

}

export const getMyTask=async(req,res,next)=>{
    const userid=req.user._id
    const task=await Task.find({user:userid})
    if(!task)return next(new ErrorHandler("tasks not found",404))
    res.status(200).json({
        success:true,
        task
    }) 
}

//updateTasks

export const UpdateMyTask=async(req,res,next)=>{
    const{id}=req.params;

    const task=await Task.findById(id)
    if(!task) return next(new ErrorHandler("tasks not found",404))

    task.isCompeleted=!task.isCompeleted

    await task.save();

    res.status(200).json({
        success:true,
        message:"is Updated"
    }) 
}

//delete Tasks

export const deleteMyTask=async(req,res,next)=>{
    const{id}=req.params;

    const task=await Task.findById(id)
    console.log(task);
    if(!task) return next(new ErrorHandler("tasks not found",404))
    await task.deleteOne();
    res.status(200).json({
        success:true,
        message:"Deleted successfully"
    }) 
}