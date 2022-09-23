import express from "express";
const router = express.Router();

router.put('/ping', (req, res)=>{
    res.send("hello!")
})

export default router;
