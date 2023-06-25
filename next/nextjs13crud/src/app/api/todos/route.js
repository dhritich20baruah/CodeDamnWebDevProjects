import mongoose from "mongoose";
import Todo from "@/app/model/Todo";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

dbConnect();

export const GET = async (req, res) => {
  const todos = await Todo.find().sort({ date: "desc" });
  return NextResponse.json(todos);
};

export const POST = async (req, res) => {
  const { title, todo } = await req.json();
  let newTodo = new Todo({
    title,
    todo,
  });
  await newTodo.save();
  console.log(newTodo);
  return NextResponse.json(newTodo);
};

export const DELETE = async (req, res) => {
  let { id } = req.json();

  const deletedTodo = await Todo.findByIdAndDelete({ _id: id });

  if (!deletedTodo) {
    return NextResponse.status(404).json({ message: "Todo not found" });
  }

  console.log("Deleted:", deletedTodo);
  return NextResponse.json({ message: "Todo deleted" });
};
