// import React from 'react'
const mongoose = require("mongoose");
import Todo from "../../model/Todo";
import {redirect} from 'next/navigation'

const DeleteBtn = async (props) => {
    const id = props.id
    await mongoose
    .connect("mongodb://127.0.0.1:27017/nextJS13CRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    async function deleteTodo() {
        'use server'
        await Todo.deleteOne({ _id: id });
        redirect("/display")
      }

  return (
    <form action={deleteTodo}>
    <button className="btn btn-danger" type="submit">Delete</button>
    </form>
  )
}

export default DeleteBtn