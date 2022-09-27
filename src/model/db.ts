import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env["MONGODB_URI"] ?? ""

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("successful connection")
}).catch((err)=>{
    console.log("error connecting to db")
    console.log(err)
});

