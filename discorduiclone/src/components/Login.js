import React, {useContext} from 'react'
import qrcode from '../assets/qr_code.png'
import { FormStateContext } from './Context'

const Login = () => {
    const {setVisible} = useContext(FormStateContext)

    return (
        <div className='bg-[#36393f] flex w-[43vw] h-[55vh] rounded-lg mt-24'>
            <div className='text-[#dcddde] p-5 flex flex-col'>
                <h2 class="text-3xl text-white">Welcome back!</h2>
                <p className='py-3'>We're so excited to see you again!</p>
                <label>EMAIL</label>
                <input type="email" name="email" id="email" className='bg-black py-2 mb-4'/>
                <label>PASSWORD</label>
                <input type="password" name="password" id="password" className="py-2 mb-4 bg-black"/>
                <p  className='text-[#00b0f4]'>Forgot your password?</p>
                <button className='bg-[#404eed] py-2 my-4 w-72'>Login</button>
                <p>Need an account?<span className='text-[#00b0f4]' onClick={()=>{setVisible("signup")}}> Register</span></p>
            </div>
            <div className='text-white p-6 text-center space-y-3 mt-8'>
                <div className='bg-white py-3 px-2 rounded-md w-48 mx-auto'>
                <img src={qrcode} alt="qrcode" className='mx-auto'/>
                </div>
                <h2 className='text-2xl text-[#dcddde]'>Log in with QR Code</h2>
                <p className='text-xl text-[#dcddde]'>Scan this with <span className='font-bold'>Discord mobile <br/> app</span> to log in instantly</p>
            </div>
        </div>
    )
}

export default Login