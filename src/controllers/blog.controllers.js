import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { Blog } from "../models/blog.models.js";

// const getAllBlog = asyncHandler(async (req, res) => {
//   const allBlogs = await Blog.find({});
//   //console.log(allBlogs);
//   res.render("home", {
//     blogs: allBlogs,
//   });
// });

const getBlog = asyncHandler(async (req, res) => {
  const allBlogs = await Blog.find({}); //createdBy: userId
  //console.log(allBlogs);
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

const addBlogRender = asyncHandler(async (req, res) => {
  res.render("addBlog", {
    user: req.user,
  });
});

const addBlog = asyncHandler(async (req, res) => {
  //console.log(req.body);
  const { title, desc } = req.body;

  if (title === "") throw new ApiError(400, "Title is required!");
  if (desc === "") throw new ApiError(400, "Description is required!");

  const blog = await Blog.create({
    title,
    desc,
    createdBy: req.user._id,
  });
  //console.log(blog);
  res.redirect("/api/v1/blog");
});

const viewBlog = asyncHandler(async (req, res) => {
  const allBlogs = await Blog.findById(req.params.id).populate("createdBy");
  //console.log(blog);
  return res.render("blog", {
    user: req.user,
    blog: allBlogs,
  });
});

export { getBlog, addBlog, addBlogRender, viewBlog };
