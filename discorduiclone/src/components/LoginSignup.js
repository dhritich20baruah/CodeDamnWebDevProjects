import React, {useState} from 'react';
import { Link } from "react-router-dom"
import Discordlogo from '../assets/discord_main_logo.svg'
import Signup from './Signup';
import Login from './Login';
import { FormStateContext } from './Context';

const LoginSignup = () => {
  const [visible, setVisible] = useState("login")
  return (
    <div className='bg-[#404eed] h-[100vh] flex align-middle justify-center'>
      <Link to='/'><img src={Discordlogo} alt="logo" className='mt-4'/>
        </Link>
      <FormStateContext.Provider value={{visible, setVisible}}>
        {visible === "login" && <Login/>}
        {visible === "signup" && <Signup/>}
      </FormStateContext.Provider>
    </div>
  )
}

export default LoginSignup