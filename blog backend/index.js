import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import cookieParser from 'cookie-parser';
import express from 'express';
import { app } from './src/app.js'; // Corrected import
import cors from 'cors';

dotenv.config({
    path: './.env'
});

// const allowedOrigins = [
//     'https://vercel-project-kappa.vercel.app',
//     // Add more origins if needed
// ];

app.use(cookieParser());
app.use(cors({
    origin: 'https://vercel-project-kappa.vercel.app', // Replace with your actual Vercel app URL
    credentials: true,
  }));


app.get('/', (req, res) => {
    res.send('Server is Ready');
});

app.use(express.json());

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
            app.get('/api/check-connection', (req, res) => {
                res.json({ message: 'Frontend and backend are connected!' });
            });
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
