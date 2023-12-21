import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Express server error:", error);
    });
    app.listen(process.env.PORT || 8015, () => {
      console.log(` Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed! ", err);
  });
