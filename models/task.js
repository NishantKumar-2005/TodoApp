import mongoose from "mongoose";

const schema = new mongoose.Schema({
    titel:{
        type:String,
        required:true,
        
    },
    Discribtion:{
        type:String,
        required:true,
        
    },
    isCompeleted:{
        required:true,
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export const Task = mongoose.model("task", schema);
