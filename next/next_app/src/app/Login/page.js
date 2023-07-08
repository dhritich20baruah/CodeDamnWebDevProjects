"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    const {data: session} = useSession()

    if(session){
        return(
            <div>
                <p>Welcome, {session.user.email}</p>
                <button className="p-2 text-white bg-orange-400 hover:cursor-pointer hover:bg-red-500" onClick={()=>signOut()}>Sign Out</button>
            </div>
            )
        }
    else{
        return(
            <div>
                <p>You are not Signed In</p>
                <button className="p-2 text-white bg-orange-400 hover:cursor-pointer hover:bg-red-500" onClick={()=>signIn()}>Sign In</button>
            </div>
        )
    }
}

export default Login