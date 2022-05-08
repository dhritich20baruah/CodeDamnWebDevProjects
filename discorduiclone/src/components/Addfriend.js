import React from 'react'

const Addfriend = () => {
  return (
    <div className='space-y-3 rounded-lg'>
        <h1 className='font-bold text-white text-xl'>ADD FRIEND</h1>
        <p className='text-[#b9bbbe]'>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
        <div className='w-[90%] h-12 bg-[#2f3136]'>
            <input type="text" placeholder="Enter a Username#0000" className='h-12 w-4/6 bg-[#23272a] p-2'/>
            <button className='bg-[#404eed] w-44 h-8 ml-4 rounded-lg text-white'>Send Friend Request</button>
        </div>
    </div>
  )
}

export default Addfriend