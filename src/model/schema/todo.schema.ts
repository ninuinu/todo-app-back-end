import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    description: String,
}, {timestamps:true})

export default mongoose.model("Todo", todoSchema)