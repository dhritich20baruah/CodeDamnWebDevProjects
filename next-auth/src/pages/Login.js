import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
    const {data: session} = useSession();
    console.log(session)

    if(session){
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <button className="p-2 font-bold bg-yellow-500 hover:bg-orange-500 hover:text-white" onClick={()=> signOut()}>Sign Out</button>
            </div>
            )
        } else {
            return(
            <div>
                <p>You are not signed in.</p>
                <button className="p-2 font-bold bg-yellow-500 hover:bg-orange-500 hover:text-white" onClick={()=> signIn()}>Sign In</button>
            </div>
            )
        }
}

export default Login