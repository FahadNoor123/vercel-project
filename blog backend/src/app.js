import express from "express";

import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js';
import blogRouter from "./routes/blog.routes.js";
import cors from 'cors';

const app = express();
app.use(cors({
  origin: ['http://localhost:5173/','https://bloger-website-gamma.vercel.app', 'https://vercel-project-kappa.vercel.app','http://localhost:5173/'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the HTTP methods you want to allow
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



app.use("/api/v1/users", userRouter);
app.use("/api/v1/blog", blogRouter);

export { app };
