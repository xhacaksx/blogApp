import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getRegisterUser,
  getLoginUser,
} from "../controllers/user.controllers.js";
const router = Router();

router.route("/register").get(getRegisterUser);
router.route("/login").get(getLoginUser);

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
