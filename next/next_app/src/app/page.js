import Image from 'next/image'
import Todo from './model/Todo'
import mongoose from 'mongoose'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  await mongoose.connect("mongodb://127.0.0.1:27017/NextJSTodo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  //function to create Todo
  async function newTodo(data){
    "use server"
    let todo = data.get("todo")?.valueOf()
    try{
      let newTodo = new Todo({todo})
      await newTodo.save()
      console.log(newTodo)
    }catch(error){
      console.log(error)
    }
    // redirect('/')
    revalidatePath('/')
  }
  const todos = await Todo.find()
  return (
    <main className='m-10 space-y-5'>
      <h1 className="text-xl font-bold">Create Todo</h1>
      <form action={newTodo}>
        <label htmlFor="Todo">Todo</label>
        <br />
        <input type="text" name="todo" id="todo" className='border-black border-2 p-2'/>
        <br />
        <button type="submit" className='p-2 bg-yellow-500 hover:bg-orange-500'>SUBMIT</button>
      </form>

      <div className="m-3 text-center">
        <h1 className="font-bold text-xl">Todos</h1>
        {todos.map((element)=>{
          return(
            <ul key={element._id}>
              <li># {element.todo}</li>
            </ul>
          )
        })}
      </div>
    </main>
  )
}
