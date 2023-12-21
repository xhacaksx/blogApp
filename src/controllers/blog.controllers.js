import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const getBlog = asyncHandler(async (req, res) => {
  res.render("home", {
    user: req.user,
  });
});

export { getBlog };
