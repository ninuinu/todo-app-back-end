import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

import Todo from './schema/todo.schema'

const USER = process.env["DB_USER"];
const PASSWORD = process.env["DB_PASSWORD"];
const DB_URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.hkogdrz.mongodb.net/?retryWrites=true&w=majority\n`;

mongoose.connect(DB_URL).then(()=>{
    console.log("successful connection")
}).catch((err)=>{
    console.log("error connecting to db")
});
/*
async function createTodo(){
    const todo1 = new Todo({description: 'Water plants'})
    await todo1.save()
    const todo2 = new Todo({description: 'Pay bills'})
    await todo2.save()
    const todo3 = new Todo({description: 'Feed the dog'})
    await todo3.save()
}
createTodo()
*/