"use client";
import React, { useState, useEffect } from "react";
import postComment from "./commentBack";
import { getComment } from "./commentBack";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const CommentComponent = (props) => {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  const { blogsId } = props;

  const {data:session} = useSession();

  const router = useRouter();
  
  useEffect(async() => {
    if(session){
      await setUserName(session.user.name);
    }
    fetchComments();
  }, []);

  const handleSubmit = () => {
    console.log(userName);
    postComment(comment, userName, blogsId);
    router.refresh();
  };

  const fetchComments = async () => {
    let arr = await getComment(blogsId);
    setCommentArr(arr);
  };

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
            onClick={signOut}
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
      <div className="my-5">
        {commentArr.map((element) => {
          return (
            <>
              <div className="border-2 p-3 m-3 border-gray-500 rounded-md">
                <p className="font-semibold mb-3">{element.userName}</p>
                <p className="italic font-serif">{element.comment}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CommentComponent;
