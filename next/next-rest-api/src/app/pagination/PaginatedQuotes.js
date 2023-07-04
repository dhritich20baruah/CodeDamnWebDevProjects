"use client";
import React, { useState } from "react";
import getQuotes, { quotesLength } from "./getQuotes";

const PaginatedQuotes = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [quotesArr, setQuotesArr] = useState([])
  const [length, setLength] = useState(0)

  const getLength = async()=>{
   const result = await quotesLength()
   setLength(result)
  }
  // getLength()

  const pageSize = 3;
  const pagesCount = Math.ceil(length / pageSize);

  if (pagesCount === 1) return null;
  const pages = []
 
  for (let i = 1; i<= pagesCount; i++){
    pages.push(i)
  }


  async function onPageChange(page){
    setCurrentPage(page)
    const result = await getQuotes(currentPage, pageSize);
    setQuotesArr(result)
    console.log(quotesArr)
  }
  return (
    <main className="m-10">
      <h1>Paginated Display</h1>
      <div className="m-10">
        {quotesArr.map((element) => {
          return (
            <ul key={element._id} className="flex justify-between">
              <li className="w-[90%] italic font-serif text-lg">"{element.quote}"</li>
            </ul>
          );
        })}
      </div>
      {/* Pagination */}
      <div>
        <ul className="pagination flex justify-between items-center list-none">
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
                onClick={() => onPageChange(page)}
                className="pagelink hover:cursor-pointer"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PaginatedQuotes;
