import React, { useState } from "react";
import Axios from "axios";
import { useSession, signOut } from 'next-auth/react'


export async function getStaticProps() {

  const mongoose = require("mongoose");
  const Todos = require("../../model/Todo");

  await mongoose.connect("mongodb://127.0.0.1:27017/nextJSAuth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const todos = await Todos.find().sort({ createdAt: "desc" });
  console.log(todos);
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}

const Display = ({ todos }) => {
  const {data: session, status} = useSession({required: true})

  const [visibility, setVisibility] = useState(false);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [todoId, setTodoId] = useState("");

  const editForm = (title, todo, todoId) => {
    setVisibility((visibility) => !visibility);
    setTitle(title);
    setTodo(todo);
    setTodoId(todoId);
  };

  const updateTodo = async (todoId) => {
    const todoObj = {
      title: title,
      todo: todo,
    };
    console.log(todoObj);
    await Axios.put(`/api/updateTodo?id=${todoId}`, todoObj).then(() => {
      window.location.reload(false);
    });
  };

  const deleteTodo = (todoId) => {
    Axios.delete(`/api/deleteTodo?id=${todoId}`).then(() => {
      window.location.reload(false);
    });
  };

  if(status === 'authenticated'){
  return (
    <>
      <div className="m-10 space-y-5">
        <h1 className="text-xl font-bold">Notes</h1>
        <div>
          <ul className="flex font-bold">
            <li className="flex-1">Title</li>
            <li className="flex-1">Note</li>
            <li className="flex-1">Options</li>
          </ul>
          <hr />
          {todos.map((element) => {
            return (
              <>
                <ul key={element._id} className="flex">
                  <li className="flex-1">{element.title}</li>
                  <li className="flex-1">{element.todo}</li>
                  <li className="flex-1">
                    <div className="flex">
                      <button
                        className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer"
                        onClick={() => deleteTodo(element._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer"
                        onClick={(title, todo, todoId) =>
                          editForm(element.title, element.todo, element._id)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </li>
                </ul>
                <hr />
              </>
            );
          })}
        </div>
      </div>
      {visibility && (
        <div className="container">
          <h1>Update Todo</h1>
          <form>
            <div>
              <label className="text-lg ">Title</label>
              <br />
              <input
                type="text"
                className="w-[100%] md:w-[50%] bg-slate-200 h-10 p-3"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div>
              <label>Note</label>
              <br />
              <textarea
                type="text"
                rows="3"
                className="w-[100%] md:w-[50%] bg-slate-200 p-3"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="p-2 m-2 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white"
              onClick={() => updateTodo(todoId)}
            >
              Submit
            </button>
            <button
              className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer"
              onClick={() => setVisibility((visibility) => !visibility)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}else {
  return(
  <div>
      <p>You are not signed in.</p>
  </div>
  )
}
};

export default Display;
