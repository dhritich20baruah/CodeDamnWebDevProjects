"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "axios";

const page = async () => {
  let todos = await fetch("http://localhost:3000/api/todos").then((res) =>
    res.json()
  );

  // const router = useRouter();
  const deleteTodo = async (id) => {
    try {
      const response = await fetch('/api/todos/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle success response
      } else {
        const errorData = await response.json();
        console.error(errorData);
        // Handle error response
      }
    } catch (error) {
      console.error(error);
      // Handle network or other errors
    }
  };

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Display Movies</h1>
      <div>
        <ul className="flex font-bold">
          <li className="flex-1">Movie</li>
          <li className="flex-1">Star Cast</li>
          <li className="flex-1">Options</li>
        </ul>
        <hr />
        {todos.map((element) => {
          return (
            <>
              <ul className="flex" key={element._id}>
                <li className="flex-1">{element.title}</li>
                <li className="flex-1">{element.todo}</li>
                <li className="flex-1">
                  <div className="flex">
                    <button
                      className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer"
                      type="submit"
                      onClick={() => deleteTodo(element._id)}
                    >
                      Delete
                    </button>

                    <button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer">
                      Edit
                    </button>
                  </div>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default page;
