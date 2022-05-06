import React, { useContext } from 'react'
import { FormStateContext } from './Context'


const Signup = () => {
    const {setVisible} = useContext(FormStateContext)
    return (
       <div className='bg-[#36393f] w-[43vw] h-[55vh] flex flex-col rounded-lg mt-24 text-[#dcddde] px-6'>
           <h1 className="text-3xl text-white text-center mt-4">Create an account</h1>
           <label class="mt-3">EMAIL</label>
           <input type="text" className='bg-black py-2 mt-2'/>
           <label class="mt-3">USERNAME</label>
           <input type="text" className='bg-black py-2 mt-2'/>
           <label class="mt-3">PASSWORD</label>
           <input type="text" className='bg-black py-2 mt-2'/>
           <button className='bg-[#404eed] py-2 my-3'>Continue</button>
           <p className='text-[#00b0f4]' onClick={()=>{setVisible("login")}}>Already have an account?</p>
       </div>
    )
}

export default Signup
