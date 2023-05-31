const mongoose = require("mongoose");
import Todo from "../../../../model/Todo";
import {redirect} from 'next/navigation'
import Forms from "@/components/Forms";

export default async function Edit({params}){
  mongoose
    .connect("mongodb://127.0.0.1:27017/nextJS13CRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //Fetching the data
    const todos = await Todo.findOne({_id: params.id})
    
    //Updating the data
    async function updateTodo(data){
      "use server"
      let title = data.get('title')?.valueOf()
      let todo = data.get('todo')?.valueOf()
      var newTodo = new Todo({title, todo})
      await newTodo.save()
      console.log(newTodo)
      redirect("/display")
    }

    return(
        <div className="container">
        <h1>Edit Todo</h1>
        <p>Title: {todos.title}</p>
        <p>Todo: {todos.todo}</p>

        {/* <Forms title={todos.title} todo={todos.todo}/> */}
        <form action={updateTodo}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="exampleFormControlInput1"
            // value={todos.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Todo
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="todo"
            // value={todos.todo}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    )
}