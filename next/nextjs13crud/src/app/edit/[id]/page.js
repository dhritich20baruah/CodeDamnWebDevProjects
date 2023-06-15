import Todo from "@/app/model/Todo";
import dbConnect from "@/app/utils/dbConnect";
import { redirect } from "next/navigation";

export default async function edit({ params }) {
  dbConnect();
  const todos = await Todo.findOne({ _id: params.id });

  //function to save the updated todo
  async function updateTodo(data){
    "use server"
    let title = data.get("title")?.valueOf();
    let todo = data.get("todo")?.valueOf();
    let updatedTodo = await Todo.findByIdAndUpdate({_id: params.id},{title, todo});
    console.log(updatedTodo)
    redirect('/show')
  }
  return (
    <main className="m-10 apsce-y-5">
      <h1 className="text-xl font-bold">Create Todo</h1>
      <form action={updateTodo}>
        <div>
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            className="w-[100%] bg-slate-200 h-10 p-3"
            defaultValue={todos.title}
          />
        </div>
        <div>
          <label htmlFor="todo" className="text-lg">
            Todo
          </label>
          <br />
          <input
            type="text"
            name="todo"
            id="todo"
            className="w-[100%] bg-slate-200 h-10 p-3"
            defaultValue={todos.todo}
          />
        </div>
        <button
          type="submit"
          className="p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white"
        >
          SUBMIT
        </button>
      </form>
    </main>
  );
}
