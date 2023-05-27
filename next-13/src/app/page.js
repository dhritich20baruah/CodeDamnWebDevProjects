import styles from "./page.module.css";
const mongoose = require('mongoose')
const Todos = require('../../model/Todo')

export default async function Home() {
  await mongoose.connect('mongodb://127.0.0.1:27017/nextJSCRUD',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const todos = await Todos.find()
    console.log(todos)
  return (
    <div className='container'>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Todo</th>
                <th scope="col">Options</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((element)=>{
               return(
                <tr key={element._id}>
                <td>{element.title}</td>
                <td>{element.todo}</td>
                <td>
                    <button className="btn btn-danger" >Delete</button>
                    <button className="btn btn-primary">Edit</button>
                </td>
            </tr>
               ) 
            })}                      
        </tbody>
    </table>
</div>
  )
}
