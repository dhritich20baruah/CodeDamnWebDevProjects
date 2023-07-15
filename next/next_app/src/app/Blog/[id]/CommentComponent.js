"use client";
import React, { useState, useEffect } from "react";
import postComment from "./commentBack";
import { getComment } from "./commentBack";
import { useSession, signIn, signOut } from "next-auth/react";

const CommentComponent = (props) => {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  const { blogsId } = props;

  const {data:session} = useSession();

  const handleSubmit = async () => {
    await postComment(comment, userName, blogsId);
    window.location.reload();
  };



  const logOut = () => {
    localStorage.clear()
    signOut()
  }

  useEffect(() => {
    // Retrieve the userName from localStorage
    const storedUserName = localStorage.getItem("user");
    if (session) {
      // If the session exists, set the userName from session.user.name
      setUserName(session.user.name);
      // Store the userName in localStorage
      localStorage.setItem("user", session.user.name);
    } else if (storedUserName) {
      // If the session does not exist but there is a storedUserName, set the userName from localStorage
      setUserName(storedUserName);
    }
  }, [session]);

  

  return (
    <div className="my-8">
      <p className="font-bold">Hello {userName}, please leave a comment.</p>
      {session ? (
        <div>
          <input
            type="text"
            name="comment"
            id="comment"
            className="w-[80%] outline-none border-b-2 border-slate-600 p-2"
            onChange={(event) => setComment(event.target.value)}
          />
          <button
            className="p-2 text-white bg-orange-600 ml-3 hover:cursor-pointer hover:bg-red-900"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="p-2 text-white bg-red-600 ml-3 hover:cursor-pointer hover:bg-red-900"
            onClick={logOut}
          >
            SignOut
          </button>
        </div>
      ) : (
        <div>
          <p>
            Please SignIn to Comment
          <button
            className="p-2 text-white bg-orange-600 ml-3 hover:cursor-pointer hover:bg-red-900"
            onClick={signIn}
            >
            SignIn
          </button>
          </p>
        </div>
      )}
      
    </div>
  );
};

export default CommentComponent;
