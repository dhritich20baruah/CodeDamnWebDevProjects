"use server";
import mongoose from "mongoose";
import Comment from "@/app/model2/Comment";

export default async function postComment(commentStr, nameStr, blogIdStr) {
  await mongoose.connect("mongodb://127.0.0.1:27017/nextBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const comment = `${commentStr}`;
  const userName = `${nameStr}`;
  const blogId = `${blogIdStr}`;
  console.log(comment, userName, blogId)
  let newComment = new Comment({ comment, userName, blogId });
  await newComment.save();
}

export async function getComment(blogId) {
  await mongoose.connect("mongodb://127.0.0.1:27017/nextBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let blogsId = blogId;

  const Comments = await Comment.find({
    $or: [
      {
        blogId: { $regex: blogsId },
      },
    ],
  });
  return Comments;
}
