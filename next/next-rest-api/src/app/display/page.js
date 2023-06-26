"use client";
import React, { useState } from "react";
import Link from "next/link";
import Axios from "axios";

export default function display() {
  const [quotesArr, setQuotesArr] = useState([]);
  //Get quotes
  const getQuotes = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/api/quotes");
      const quotesArr = response.data;
      setQuotesArr(quotesArr);
    } catch (error) {
      console.error(error);
    }
  };
  getQuotes();
  return (
    <div className="my-10">
      <Link href="/" className="m-10 font-bold hover:cursor-pointer">
        Home
      </Link>
      {quotesArr.map((element) => {
        return (
          <ul key={element._id} className="flex justify-between">
            <li>{element.quote}</li>
          </ul>
        );
      })}
    </div>
  );
}
