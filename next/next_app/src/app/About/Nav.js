"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Nav = () => {
    const router = useRouter()
  return (
    <div>
        <ul className='m-10 space-x-5 font-bold flex'>
            <Link href="/About/Product">
            <li className='hover:cursor-pointer hover:text-red-800'>Product</li>
            </Link>
            <li className='hover:cursor-pointer hover:text-red-800' 
            onClick={()=>router.push('/About/Services')}>Services</li>
        </ul>
    </div>
  )
}

export default Nav