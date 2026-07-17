import express from "express";
import blogRouter from "../routes/routes.js";

const app = express();

app.use(express.json());
app.use("/", blogRouter);

export default app;
