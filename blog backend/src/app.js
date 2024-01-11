import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js';
import blogRouter from "./routes/blog.routes.js";
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: 'https://vercel-project-kappa.vercel.app',
    credentials: true,
    // other CORS options if needed
  };
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blog", blogRouter);

export { app };
