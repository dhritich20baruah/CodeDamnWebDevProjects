"use server"
import Comment from "@/app/model2/Comment";
import mongoose from "mongoose";

export default async function DisplayComment(props) {
  const { blogid } = props;

  await mongoose.connect("mongodb://127.0.0.1:27017/nextBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const commentArr = await Comment.find({ blogId: blogid });

  return (
    <div className="my-5">
      {commentArr.map((element) => {
        return (
          <div
            className="border-2 p-3 m-3 border-gray-500 rounded-md"
            key={element._id}
          >
            <p className="font-semibold mb-3">{element.userName}</p>
            <p className="italic font-serif">{element.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
