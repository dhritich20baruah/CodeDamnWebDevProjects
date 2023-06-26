"use client";
import React, { useState } from "react";
import Link from "next/link";
import Axios from "axios";

export default function Home() {
  //Post quotes
  const [quote, setQuote] = useState("");
  const [newquote, setNewQuote] = useState("");
  const [quoteId, setQuoteId] = useState("");
  const [quotesArr, setQuotesArr] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const handleSubmit = async () => {
    const quoteObj = {
      quote: quote,
    };
    console.log(quoteObj);
    await Axios.post(`/api/quotes`, quoteObj).then(() => {
      alert("Posted");
    });
  };

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

  //Delete Quotes
  const deleteQuotes = async (id) => {
    await Axios.delete(`http://localhost:3000/api/quotes/${id}`).then(() => {
      alert("Deleted");
    });
  };

  //Edit Quotes

  const editForm = (quote, quoteId) => {
    setVisibility((visibility) => !visibility);
    setNewQuote(quote);
    setQuoteId(quoteId);
  };

  const updateQuote = async (id) => {
    const quoteObj = {
      quote: newquote,
    };
    console.log(quoteObj);
    await Axios.put(`http://localhost:3000/api/quotes/${id}`, quoteObj).then(
      () => {
        alert("Updated");
      }
    );
  };

  return (
    <main className="m-12">
      <Link href="/display">Display</Link>
      <form>
        <label htmlFor="quote">
          <input
            type="text"
            name="quote"
            id="quote"
            value={quote}
            onChange={(event) => setQuote(event.target.value)}
            className="border-2 border-gray-400 p-2"
          />
        </label>
        <br />
        <button className="p-2 bg-orange-500" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="my-10">
        {quotesArr.map((element) => {
          return (
            <ul key={element._id} className="flex justify-between">
              <li>{element.quote}</li>
              <li>
                <i
                  className="material-icons mx-1 text-red-600 p-1 hover:cursor-pointer hover:bg-slate-400"
                  onClick={() => deleteQuotes(element._id)}
                >
                  delete
                </i>
                <i
                  className="material-icons mx-1 text-green-600 p-1 hover:cursor-pointer hover:bg-slate-400"
                  onClick={() => editForm(element.quote, element._id)}
                >
                  mode_edit
                </i>
              </li>
            </ul>
          );
        })}
      </div>

      {visibility && (
        <form>
          <label htmlFor="quote">
            <input
              type="text"
              name="quote"
              id="quote"
              value={newquote}
              onChange={(event) => setNewQuote(event.target.value)}
              className="border-2 border-gray-400 p-2"
            />
          </label>
          <br />
          <button
            className="p-2 bg-orange-500"
            onClick={() => updateQuote(quoteId)}
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
