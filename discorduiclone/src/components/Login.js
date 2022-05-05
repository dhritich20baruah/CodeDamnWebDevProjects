import React from 'react'
import bgimages from '../assets/stickers_icon.svg'
import centerBgHeader from '../assets/center_bg_landing_header.svg'

const Login = () => {
  return (
    <div className='bg-[#404eed] h-[100vh]'>
        <img src={bgimages} alt="" />
        <img src={centerBgHeader} alt="centerbg" className='overflow-hidden right-0' />

    </div>
  )
}

export default Login