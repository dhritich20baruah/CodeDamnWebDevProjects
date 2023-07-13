"use client";
import React, { useState, useEffect } from "react";
import postComment from "./commentBack";
import { getComment } from "./commentBack";
import { useSession } from "next-auth/react";

const CommentComponent = () => {
  const [comment, setComment] = useState("");
  const [blogId, setBlogId] = useState("");
  const [name, setName] = useState("");

  const { data: session } = useSession();
  useEffect(() => {
    if(session){
        setName(session.user.name)
    }
    console.log(name)
  }, [])
  
//   let userName = session.user.name
//   console.log(session.user.name)

  const handleSubmit = () => {
    postComment(comment, blogId);
  };
  const getComments = [];
  return (
    <div className="my-8">
      <p className="font-bold">Comments</p>
      <div>
        <input
          type="text"
          name="comment"
          id="comment"
          className="w-[90%] outline-none border-b-2 border-slate-600 p-2"
          onChange={(event) => setComment(event.target.value)}
        />
        <button
          className="p-2 text-white bg-orange-600 ml-3 hover:cursor-pointer hover:bg-red-900"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="my-5">
        {/* {getComments.map((element) => {
          return (
            <> */}
        <div className="border-2 p-3 m-3 border-gray-500 rounded-md">
          <p className="font-semibold mb-3">{name}</p>
          <p className="italic font-serif">"element.comment"</p>
        </div>
        {/* </>
          );
        })} */}
      </div>
    </div>
  );
};

export default CommentComponent;
