import React from 'react'
import Nav from './Nav';
import inviteOnly from '../assets/invite_only_landing.svg'
import hangingout from '../assets/hanging_out_easy_landing.svg'
import fandom from '../assets/fandom_landing.svg'
import reliable from '../assets/just_chiling_landing.svg'
import stars from '../assets/tiny_stars_landing.svg'
import usa from '../assets/usa_flag.png'
import leftBgHeader from '../assets/left_bg_landing_header.svg'
import rightBgHeader from '../assets/right_bg_landing_header.svg'
import centerBgHeader from '../assets/center_bg_landing_header.svg'
import Discordlogo from '../assets/discord_main_logo.svg'
import twitter from '../assets/twitter_icon.svg'
import youtube from '../assets/youtube_icon.svg'
import insta from '../assets/instagram_icon.svg'
import facebook from '../assets/facebook_icon.svg'



const Home = () => {
  
  return (
    <>
    {<Nav/>}
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
        <div className="bg-images flex justify-end">
          <img src={leftBgHeader} alt="leftbg" className='h-60 absolute left-0' />
          <img src={centerBgHeader} alt="centerbg" className='overflow-hidden right-0' />
          <img src={rightBgHeader} alt="rightbg" className='h-52 absolute right-0' />
        </div>
      </div>

      <div className="sections flex h-[100vh] mx-auto">
        <div className="landing-img w-[70vw]">
          <img src={inviteOnly} alt="invite only" className="w-[75%] mx-auto mt-14" />
        </div>
        <div className='mx-auto w-[30vw]'>
          <h1 className='text-6xl font-bold p-10 mt-14'>Create an invite-only place where you belong</h1>
          <p className='p-10 text-xl'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
      </div>

      <div className="sections flex h-[100vh] mx-auto bg-[#f6f6f6]">
        <div className='mx-auto w-[35vw]'>
          <h1 className='text-6xl font-bold p-10 mt-14'>Where hanging out is easy</h1>
          <p className='p-10 text-xl'>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
        </div>
        <div className="landing-img w-[65vw]">
          <img src={hangingout} alt="hanging out" className="w-[75%] mx-auto mt-14" />
        </div>
      </div>


      <div className="sections flex h-[100vh] mx-auto">
        <div className="landing-img w-[70vw]">
          <img src={fandom} alt="invite only" className="w-[75%] mx-auto mt-14" />
        </div>
        <div className='mx-auto w-[30vw]'>
          <h1 className='text-6xl font-bold p-10 mt-14'>From few to a fandom</h1>
          <p className='p-10 text-xl'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels and more.</p>
        </div>
      </div>

      <div className="sections text-center bg-[#f6f6f6] pt-14">
        <div>
          <h1 className="text-6xl font-bold">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p className="text-xl py-10 px-48">
            Low latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
          </p>
        </div>
        <div className="landing-img mx-auto w-[80vw]">
          <img src={reliable} alt="invite only" />
        </div>
        <img src={stars} alt="stars" className="mx-auto w-2/6" />
        <h2 className="text-4xl font-bold">Ready to start your journey?</h2>
        <button className='bg-[#5865f2] w-1/6 text-white py-4 my-6 rounded-3xl'>Download for Mac</button>
      </div>
    
      <div className="footer bg-black">
        <div className="flex text-white py-16 justify-evenly">
          <ul className='space-y-4 w-52'>
            <li className='text-[#0000ee] text-4xl font-bold'>IMAGINE A PLACE</li>
            <li className='flex'> <img src={usa} alt="usa" className='w-6 h-5' /> English USA</li>
            <li><div className='media-icons flex'>
              <img src={twitter} alt="twitter" />
              <img src={insta} alt="insta" />
              <img src={facebook} alt="facebook" />
              <img src={youtube} alt="youtube" />
              </div></li>
          </ul>
          <ul className='space-y-3'>
            <li className='text-[#0000ee]'>Product</li>
            <li>Download</li>
            <li>Nitro</li>
            <li>Status</li>
          </ul>
          <ul className='space-y-3'>
            <li className='text-[#0000ee]'>Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
          <ul className='space-y-3'>
            <li className='text-[#0000ee]'>Resources</li>
            <li>Collage</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Developers</li>
            <li>StreamKit</li>
          </ul>
          <ul className='space-y-3'>
            <li className='text-[#0000ee]'>Policies</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Guidelines</li>
            <li>Acknowledgements</li>
            <li>Licenses</li>
            <li>Moderation</li>
          </ul>
        </div>
        <hr className='text-[#0000ee]' />
        <div className="footer2 flex justify-between">
          <div>
          <img src={Discordlogo} alt="logo" className='mt-4 ml-4'/>
          </div>
          <div>
          <button className='bg-[#0000ee] w-32 text-white py-2 mt-2 mr-4 rounded-3xl right-0'>Sign up</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home