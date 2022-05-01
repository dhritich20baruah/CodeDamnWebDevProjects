import React from 'react'
import { Link } from "react-router-dom"
import Discordlogo from '../assets/discord_main_logo.svg'


const Nav = () => {
  return (
    <div className="navbar absolute mt-4">
    <div className='flex space-x-10 mx-10'>
        <div>
        <Link to='/'><img src={Discordlogo} alt="logo"/>
        </Link>
        </div>
        <ul className='flex text-lg space-x-4 text-white'>
            <li><Link to='#'>Download</Link></li>
            <li><Link to='#'>Nitro</Link></li>
            <li><Link to='#'>Safety</Link></li>
            <li><Link to='#'>Support</Link></li>
            <li><Link to='#'>Blog</Link></li>
            <li><Link to='#'>Careers</Link></li>
        </ul>
        <button className="btn bg-white text-black rounded-2xl w-20"><Link to='/Login'>Login</Link></button>
    </div>
    </div>
  )
}

export default Nav