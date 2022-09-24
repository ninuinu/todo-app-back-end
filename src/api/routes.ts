import express from "express";
import {getTodos} from "../controllers/todo.controller";
const router = express.Router();

router.put('/ping', (req, res)=>{
    res.send("hello!")
})

router.get('/todos', getTodos)

export default router;
