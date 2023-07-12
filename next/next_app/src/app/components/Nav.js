import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
        <ul className="flex bg-black text-cyan-400 p-3 space-x-5">
            <Link href='/'>
            <li className="hover:cursor-pointer hover:text-white">Home</li>
            </Link>
            <Link href='/map'>
            <li className="hover:cursor-pointer hover:text-white">Map</li>
            </Link>
            <Link href='/Login'>
            <li className="hover:cursor-pointer hover:text-white">Login</li>
            </Link>
            <Link href='/Blog'>
            <li className="hover:cursor-pointer hover:text-white">Blog</li>
            </Link>
        </ul>
    </div>
  )
}

export default Nav