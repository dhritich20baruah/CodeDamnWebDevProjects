const mongoose = require('mongoose')
import Todo from '../../model/Todo'
import {redirect} from 'next/navigation'

export default function Home() {
 
  async function newTodo(data){
   "use server"
   let title = data.get('title')?.valueOf()
   let todo = data.get('todo')?.valueOf()


   try{
    await mongoose.connect('mongodb://127.0.0.1:27017/nextJS13CRUD', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(()=> console.log('DB connected'))

    var newTodo = new Todo({title, todo})
    await newTodo.save()
   }
   catch(error){
    console.log(error)
    res.status(500).json({error: "Internal Server Error"})
   }
   redirect("/")

  }
  return (
    <>
      <div className="container">
        <h1>Create Todo</h1>
        <form action={newTodo}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="exampleFormControlInput1"
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
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    </>
  );
}
