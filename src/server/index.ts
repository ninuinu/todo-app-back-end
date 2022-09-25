import express from 'express';
import router from '../api/routes';
import dotenv from 'dotenv';
import '../model/db';
import cors from 'cors';
import bodyParser from "body-parser";


dotenv.config();



const app = express()
app.use(bodyParser.json());

app.use(cors({
    origin: ["http://localhost:3000"]
}));

app.use('/', router);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})