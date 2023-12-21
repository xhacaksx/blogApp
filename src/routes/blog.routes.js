import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { getBlog } from "../controllers/blog.controllers.js";
const router = Router();

router.route("/").get(verifyJWT, getBlog);

export default router;
