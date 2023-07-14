import mongoose from "mongoose";
import Blog from "@/app/model/Blog";
import { redirect } from "next/navigation";

export default async function Create() {
  async function newBlog(data) {
    "use server";
    let title = data.get("title")?.valueOf();
    let image = data.get("image")?.valueOf();
    let para1 = data.get("para1")?.valueOf();
    let para2 = data.get("para2")?.valueOf();

    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/nextBlog", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      let newBlog = new Blog({ title, image, para1, para2 });
      await newBlog.save();
      console.log(newBlog);
    } catch (error) {
      console.log(error);
    }
    redirect("/Blog");
  }
  return (
    <main className="m-10">
      <h1 className="text-center m-5">New Blog</h1>
      <div>
        <form action={newBlog}>
          <input
            type="text"
            id="title"
            placeholder="title"
            name="title"
            className="border-2 border-black w-[100%]"
          />
          <br />
          <input
            type="text"
            id="image"
            placeholder="image link"
            name="image"
            className="border-2 border-black w-[100%]"
          />
          <br />
          <textarea
            name="para1"
            id="para1"
            cols="30"
            rows="10"
            placeholder="para1"
            className="border-2 border-black w-[100%]"
          ></textarea>
          <br />
          <textarea
            name="para2"
            id="para2"
            cols="30"
            rows="10"
            placeholder="para2"
            className="border-2 border-black w-[100%]"
          ></textarea>
          <br />
          <button className="p-2 text-white hover:bg-red-600 bg-orange-600">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
