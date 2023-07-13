import Blog from "@/app/model/Blog";
import dbConnect from "@/app/components/dbConnect";
import Comment from "@/app/model/Comment";

export default async function page({ params }) {
  dbConnect();
  const blogs = await Blog.findOne({ _id: params.id });

  const postComment = async (data) => {
    "use server";
    const comment = data.get("comment").valueOf();

    let newComment = new Comment({ comment });
    await newComment.save();
    console.log(newComment);
  };

  const getComments = await Comment.find({});
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

      <div className="my-8">
        <p className="font-bold">Comments</p>
        <form action={postComment}>
          <div>
            <input
              type="text"
              name="comment"
              id="comment"
              className="w-[90%] outline-none border-b-2 border-slate-600 p-2"
            />
            <button className="p-2 text-white bg-orange-600 ml-3 hover:cursor-pointer hover:bg-red-900">
              Submit
            </button>
          </div>
        </form>
        <div>
          {getComments.map((element) => {
            return (
              <>
                <p>UserName</p>
                <p>{element.comment}</p>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}
