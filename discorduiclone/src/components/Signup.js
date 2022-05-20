import React, { useContext } from 'react'
import { FormStateContext } from './Context'
import Discordlogo from '../assets/discord_main_logo.svg'
import { Link } from "react-router-dom"


const Signup = () => {
    const {setVisible} = useContext(FormStateContext)
    return (
       <div className='bg-[#36393f] md:w-[43vw] md:h-[55vh] w-[100vw] h-[100vh] flex flex-col rounded-lg md:mt-24 text-[#dcddde] px-6'>
            <Link to='/'><img src={Discordlogo} alt="logo" className='mx-auto my-3 md:hidden'/></Link>
           <h1 className="text-3xl text-white text-center mt-4">Create an account</h1>
           <label class="mt-3">EMAIL</label>
           <input type="text" className='bg-black py-2 mt-2'/>
           <label class="mt-3">USERNAME</label>
           <input type="text" className='bg-black py-2 mt-2'/>
           <label class="mt-3">PASSWORD</label>
           <input type="text" className='bg-black py-2 mt-2'/>
           <button className='bg-[#404eed] py-2 my-3'>Continue</button>
           <p className='text-[#00b0f4] cursor-pointer' onClick={()=>{setVisible("login")}}>Already have an account?</p>
       </div>
    )
}

export default Signup
