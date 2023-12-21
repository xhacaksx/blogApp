import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blog", blogRouter);

export { app };
