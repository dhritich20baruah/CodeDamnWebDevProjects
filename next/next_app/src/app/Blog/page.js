import mongoose from "mongoose";
import Blog from "../model/Blog";
import Link from "next/link";

export default async function Blogs() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nextBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  let blogs = await Blog.find({});

  return (
    <main className="m-10">
      <h1 className="font-bold text-gray-800 text-2xl my-5 text-center">Blogs</h1>
      {blogs.map((element) => {
        return (
          <Link href={"/Blog/"+element._id}>
          <div key={element._id} className="w-[60%] hover:cursor-pointer hover:text-red-700 mx-auto my-auto">
            <p className="text-center font-bold m-5">
              {element.title}
            </p>
            <p className="text-right italic">______by Blogger One</p>
            <hr />
          </div>
          </Link>
        );
      })}
    </main>
  );
}
