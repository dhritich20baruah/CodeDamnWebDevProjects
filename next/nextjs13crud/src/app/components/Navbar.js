import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <ul className='flex m-3 space-x-4 font-bold'>
            <Link href='/'>
            <li className='hover:cursor-pointer hover:text-red-600'>Add</li>
            </Link>
            <Link href='/show'>
            <li className='hover:cursor-pointer hover:text-red-600'>Show</li>
            </Link>
            <Link href='/Display'>
            <li className='hover:cursor-pointer hover:text-red-600'>Display</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar