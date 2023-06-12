import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
import Axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [title, setTitle] = useState('')
  const [todo, setTodo] = useState('')

  const handleSubmit = () =>{
    const todoObj = {
      title: title,
      todo: todo
    }
    console.log(todoObj)
    Axios.post('/api/newTodo', todoObj)
    .then(()=>{
      alert('Todo added')
    })
  }
  return (
    <main
      className={`m-10 space-y-5 ${inter.className}`}
    >
      <h1 className="text-xl font-bold">Create Note</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-lg ">Title</label>
          <br />
          <input
            type="text"
            onChange={(event)=>setTitle(event.target.value)}
            className="w-[100%] md:w-[50%] bg-slate-200 h-10 p-3"
          />
        </div>
        <div>
          <label>Note</label>
          <br />
          <textarea
            type="text"
            onChange={(event)=>setTodo(event.target.value)}
            rows="3"
            className="w-[100%] md:w-[50%] bg-slate-200 p-3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white"
        >
          Submit
        </button>
      </form>
    </main>
  )
}
