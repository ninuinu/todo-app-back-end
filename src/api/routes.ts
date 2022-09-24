import express from "express";
import {getTodos, deleteTodos} from "../controllers/todo.controller";
const router = express.Router();

router.put('/ping', (req, res)=>{
    res.send("hello!")
})

router.get('/todos', getTodos)
router.delete('/todos', deleteTodos)

export default router;
