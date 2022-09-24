import { Request, Response } from 'express';
import {TodoService} from "../services/todo.service";

export async function getTodos(req:Request, res:Response){
    try {
        console.log("in here!")
        const todos = await TodoService.getTodos();
        res.status(200).send(todos);
    } catch (error) {
        res.status(404).send("could not find todo")
    }
}

export async function deleteTodos(req:Request, res:Response){
    try{
        const id = req.query.id
        await TodoService.deleteTodos(id);
        res.status(200).send("todo deleted");
    } catch(error){
        res.status(404).send("could not find todo")
    }
}