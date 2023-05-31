import "../../app/globals.css";
const mongoose = require("mongoose");
import Todo from "../../../model/Todo";
import DeleteBtn from "@/components/DeleteBtn";
import Link from "next/link";

console.log('hello')
export default async function Display() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/nextJS13CRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  const todos = await Todo.find();
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
                <td className="d-flex">
                  <DeleteBtn id={element._id} />
                  <Link href='/edit'>
                  <button className="btn btn-primary">Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
