import Todo from "../model/Todo";
import dbConnect from "../utils/dbConnect";
import Link from "next/link";
import { redirect } from "next/navigation";
import Paginate from "../utils/Paginate";
import Pagination from "../components/Pagination";

export default async function show() {
  dbConnect();

  const todos = await Todo.find().sort({ date: "desc" });

  //Function to delete todo
  async function deleteTodo(data) {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());

    await Todo.deleteOne({ _id: id });
    redirect("/show");
  }

  //Pagination
  let currentPage = 1
  const pageSize = 3

  const onPageChange = (page = currentPage) => {
    return page
  }
  console.log(onPageChange())
  const paginatedTodos = Paginate(todos, currentPage, pageSize);

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Todos</h1>
      <div>
        <ul className="flex font-bold">
          <li className="flex-1">Movie</li>
          <li className="flex-1">Star Cast</li>
          <li className="flex-1">Options</li>
        </ul>
        <hr />
        {paginatedTodos.map((element) => {
          return (
            <>
              <ul className="flex" key={element._id}>
                <li className="flex-1">{element.title}</li>
                <li className="flex-1">{element.todo}</li>
                <li className="flex-1">
                  <div className="flex">
                    <form action={deleteTodo}>
                      <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={JSON.stringify(element._id)}
                      />
                      <button
                        className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer"
                        type="submit"
                      >
                        Delete
                      </button>
                    </form>
                    <Link href={"/edit/" + element._id}>
                      <button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>
              </ul>
            </>
          );
        })}
        {/* Pagination */}
        <Pagination items={todos.length} currentPage = {currentPage} pageSize={pageSize} onPageChange={onPageChange}/>
      </div>
    </main>
  );
}
