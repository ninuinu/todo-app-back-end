import { Request, Response } from 'express';
import {TodoService} from "../services/todo.service";

export async function getTodos(req:Request, res:Response){
    try {
        console.log("in here!")
        const todos = await TodoService.getTodos();
        res.status(200).send(todos);
    } catch (error) {
        console.log("there was an error")
    }
}