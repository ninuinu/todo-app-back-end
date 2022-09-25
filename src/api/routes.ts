import express from "express";
import {getTodos, deleteTodos, createTodos} from "../controllers/todo.controller";
const router = express.Router();

router.put('/ping', (req, res)=>{
    res.send("hello!")
})

router.post('/todos', createTodos)
router.get('/todos', getTodos)
router.delete('/todos', deleteTodos)

export default router;
