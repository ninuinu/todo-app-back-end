import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    description: String
})

export default mongoose.model("Todo", todoSchema)