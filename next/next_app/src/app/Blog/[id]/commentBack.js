"use server";
import dbConnect from "@/app/components/dbConnect";
import Comment from "@/app/model/Comment";
dbConnect()

export default async function postComment(comment, blogId){
    const commentStr = `${comment}`;
    const blogIdStr = `${blogId}`

    let newComment = new Comment({ commentStr, blogIdStr });
    await newComment.save();
    console.log(newComment);
}

export async function getComment(blogId){
    let blogsId = `${blogId}`
    const Comments = await Comment.find({
        $or: [
           {
              blogId: { $regex: blogsId },
            },
        ]
      });
    return Comments
}