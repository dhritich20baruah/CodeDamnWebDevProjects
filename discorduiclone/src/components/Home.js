import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#404eed] text-center text-white'>
        <h1 className='text-white text-6xl font-bold py-24'>IMAGINE A PLACE...</h1>
        <p className='py-2'>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
        <p className='py-2'> Where just you and a handful of friends can spend time together. A place that makes it </p>
        <p>easy to talk every day and hang out more often.</p>
        <div className="buttons flex justify-center">
            <button className='bg-white text-black w-[30vw] py-3 rounded-3xl my-10 mx-2'>
                    Download for Mac
            </button>
            <button className='bg-black text-white w-[30vw] py-3 rounded-3xl my-10 mx-2'>
                    Open Discord in your browser
            </button>
        </div>
    </div>
  )
}

export default Home