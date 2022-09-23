import express from 'express';
import router from '../api/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use('/', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})