"use client"
import React, { useState } from "react";

export default async function () {
  let todos = await fetch("http://localhost:3000/api/todos").then((res) =>
    res.json()
  );

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Todos</h1>
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

      {/* <div className="pagination">
        <ul className="flex justify-between items-center list-none">
          {pages.map((page) => (
            <li
              className={
                page === currentPage
                  ? "flex items-center justify-center w-8 h-8 border-2 border-slate-600 hover:cursor-pointer rounded-md bg-red-500"
                  : "flex items-center justify-center w-8 h-8 border-2 border-slate-600 hover:cursor-pointer rounded-md"
              }
              key={page}
            >
              <a
                // onClick={() => onPageChange(page)}
                className="pagelink hover:cursor-pointer"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </main>
  );
}
