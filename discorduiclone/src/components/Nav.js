import React from 'react'
import { Link } from "react-router-dom"
import Discordlogo from '../assets/discord_main_logo.svg'


const Nav = () => {
  return (
    <div className="navbar pt-2 bg-[#404eed]">
    <div className='flex justify-around space-x-10 mx-10'>
        <div>
        <Link to='/'><img src={Discordlogo} alt="logo"/>
        </Link>
        </div>
        <ul className='flex text-lg space-x-10 font-bold text-white '>
            <li><Link to='#'>Download</Link></li>
            <li><Link to='#'>Nitro</Link></li>
            <li><Link to='#'>Safety</Link></li>
            <li><Link to='#'>Support</Link></li>
            <li><Link to='#'>Blog</Link></li>
            <li><Link to='#'>Careers</Link></li>
        </ul>
        <button className="btn bg-white text-black rounded-3xl w-20 h-10"><Link to='/Login'>Login</Link></button>
    </div>
    </div>
  )
}

export default Nav