import { Request, Response } from 'express';
import {TodoService} from "../services/todo.service";

export async function getTodos(req:Request, res:Response){
    try {
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

export async function createTodos(req:Request, res:Response){
    try{
        const description = req.query.description
        await TodoService.createTodos(description);
        res.status(200).send("todo created");
    } catch(error){
        res.status(404).send("could not find todo")
    }
}