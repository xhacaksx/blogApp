import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // coverImageURL: {
    //   type: String, //url of third party service
    //   //required: false,
    // },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
