import express from "express";
import cors from "cors";
import { userRouter } from "./router/user"

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);