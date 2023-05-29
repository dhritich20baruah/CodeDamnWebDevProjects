import "../../app/globals.css";
import React from "react";
const mongoose = require("mongoose");
const Todos = require("../../../model/Todo");

export default async function Display() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nextJS13CRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const todos = await Todos.find();

  async function deleteTodo(id){
    await Todo.deleteTodo({_id:id})
  }
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Todo</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element.title}</td>
                <td>{element.todo}</td>
                <td>
                  <button className="btn btn-danger" >Delete</button>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
