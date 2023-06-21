// "use client"
// import React, { useState } from "react";
import Exp from "../components/Exp";

export default async function () {
async function changePage(data){
    'use server'
    const page = data.get('page')?.valueOf()
    await Exp({page})
}


  return (
    <main className="m-10">
      <Exp/>
      <div>

        <form action={changePage}>
            <input type="text" name="page" className="border-2 border-black p-1" defaultValue={2}/>
            <button type="submit" className="p-2 bg-cyan-600">Change</button>
        </form>
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
