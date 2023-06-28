"use client"
import React, { useState, useEffect } from "react";
import searchQuotes from "./searchQuotes";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [quotesArr, setQuotesArr] = useState([]);
  async function getQuote() {
    let arr = await searchQuotes(searchTerm);
    console.log(typeof(arr), arr)
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none"
          placeholder="Search...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="p-2 text-white bg-orange-500 hover:cursor-pointer"
          onClick={getQuote}
        >
          Search
        </button>
      </form>
      <div className="m-10">
        {quotesArr.map((element) => {
          return (
            <>
              <ul key={element._id} className="flex justify-between">
                <li className="w-[90%]">{element.quote}</li>
              </ul>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SearchField;
