import express from "express";
import {getTodos, deleteTodos, createTodos} from "../controllers/todo.controller";
const router = express.Router();

router.put('/ping', (req, res)=>{
    res.send("hello!")
})

router.post('/todos', createTodos)
router.get('/todos', getTodos)
router.delete('/todos', deleteTodos)

// test route for sentry
router.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});


export default router;
