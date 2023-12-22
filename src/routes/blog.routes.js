import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  getBlog,
  addBlog,
  addBlogRender,
  viewBlog,
  //getAllBlog,
} from "../controllers/blog.controllers.js";
const router = Router();

//router.route("/home").get(getAllBlog);
router.route("/").get(verifyJWT, getBlog);

router.route("/add-new").get(verifyJWT, addBlogRender);
router.route("/add-new").post(verifyJWT, addBlog);
router.route("/:id").get(verifyJWT, viewBlog);
export default router;
