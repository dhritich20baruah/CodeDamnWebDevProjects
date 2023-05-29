const mongoose = require('mongoose')
import Todo from '../../model/Todo'

export default function Home() {
 
  async function newTodo(data){
   "use server"
   const title = data.get('title')?.valueOf()
   const todo = data.get('todo')?.valueOf()


   try{
    await mongoose.connect('mongodb://127.0.0.1:27017/nextJS13CRUD', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(()=> console.log('DB connected'))

    var newTodo = new Todo({title, todo})
    await newTodo.save()
    console.log(newTodo)
   }
   catch(error){
    console.log(error)
    res.status(500).json({error: "Internal Server Error"})
   }
  }
  return (
    <>
      <div className="container">
        <h1>Create Todo</h1>
        <form action={newTodo}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
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
          <label for="exampleFormControlTextarea1" className="form-label">
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
