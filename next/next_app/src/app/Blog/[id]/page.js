import Blog from "@/app/model/Blog";
import mongoose from "mongoose";
import CommentComponent from "./CommentComponent";
import Comment from "@/app/model2/Comment";

export default async function page({ params }) {
  await mongoose.connect("mongodb://127.0.0.1:27017/nextBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //Get blog and display
  const blogs = await Blog.findOne({ _id: params.id });
  const blogsId = params.id;

  //Get Comments and Display
  const commentArr = await Comment.find({ blogId: blogsId }).sort({ date: 'desc' });

  return (
    <main className="m-8">
      <h1 className="font-bold text-gray-800 text-2xl my-5">{blogs.title}</h1>
      <img src={blogs.image} alt="" className="w-[90%] h-[50vh]" />
      <ul className="flex space-x-3 p-3">
        <li className="text-gray-600">11th July 2023</li>
        <li className="text-gray-600">Blogger one</li>
      </ul>
      <p className="text-gray-900 font-sans w-[90%] text-justify">
        {blogs.para1}
      </p>
      <p className="text-gray-900 font-sans w-[90%] text-justify">
        {blogs.para2}
      </p>

      {/* Comments Section */}
      <CommentComponent blogsId={blogsId} />
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
    </main>
  );
}
