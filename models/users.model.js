import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:[true,"username is required"],
    unique:true
  },
  email:{
    type:String,
    required:[true,"email is required"],
    unique:true,
  },
  password:{
    type:true,
    required:[true,"password is required"]
  }

},{timestamps:true})
export const User=mongoose.model("User",userSchema)