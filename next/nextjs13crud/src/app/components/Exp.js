import Todo from "../model/Todo";
import dbConnect from "../utils/dbConnect";

export default async function Exp(page){
    dbConnect()
    // const {page} = props
    const titlesPerPage = 3
    const todos = await Todo.find().sort({ date: "desc" }).skip(page * titlesPerPage).limit(titlesPerPage);

    return (
        <main className="m-10">
          <div>
            <ul className="flex justify-between m-5 font-bold">
              <li>Movies</li>
              <li>Options</li>
            </ul>
            {todos.map((element) => {
              return (
                <ul className="flex justify-between m-5" key={element._id}>
                  <li>{element.title}</li>
                  <li>
                    <button className="p-2 bg-orange-500 font-bold text-white mx-3">
                      Edit
                    </button>
                    <button className="p-2 bg-red-500 font-bold text-white mx-3">
                      Delete
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        </main>
      );
}