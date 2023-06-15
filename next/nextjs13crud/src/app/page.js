import Todo from "./model/Todo"
import dbConnect from "./utils/dbConnect";
import { redirect } from "next/navigation";
export default function Home() {
  //Function to save todo
  async function newTodo(data){
    "use server" //give the use server side directive
    let title = data.get("title")?.valueOf();
    let todo = data.get("todo")?.valueOf();

    try{
      dbConnect()
      let newTodo = new Todo({ title, todo });
      await newTodo.save()
      console.log(newTodo)
    }
    catch(error){
      console.error(error)
    }
    redirect('/show')
  }

  return (
   <main className="m-10 apsce-y-5">
    <h1 className="text-xl font-bold">Create Todo</h1>
    <form action={newTodo}>
      <div>
        <label htmlFor="title" className='text-lg'>Title</label>
        <br />
        <input type="text" name="title" id="title" className='w-[100%] bg-slate-200 h-10 p-3'/>
      </div>
      <div>
        <label htmlFor="todo" className='text-lg'>Todo</label>
        <br />
        <input type="text" name="todo" id="todo" className='w-[100%] bg-slate-200 h-10 p-3'/>
      </div>
      <button type="submit" className='p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white'>SUBMIT</button>
    </form>
   </main>
  )
}
