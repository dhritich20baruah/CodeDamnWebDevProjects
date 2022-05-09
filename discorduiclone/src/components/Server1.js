import React from 'react'
import DiscordMiniIcon from '../assets/discord_mini.png'
import NewLine from '../assets/new_line.png'
import Plus from '../assets/plus.svg'
import Compass from '../assets/compass_icon.svg'
import Download from '../assets/download_green.png'
import { Link } from 'react-router-dom'
import Bell from '../assets/bell.png'
import Pin from '../assets/pin.png'
import AllUsers from '../assets/users.png'
import Monitor from '../assets/monitor.svg'
import Question from '../assets/question.png'
import DiscordMini from '../assets/discord_mini.png'
import Emoji from '../assets/emoji.png'
import Gif from '../assets/GIF.png'
import Gift from '../assets/gift_box.png'

const Server1 = () => {
  return (
    <div className='flex'>
            <div className='flex flex-col bg-[#202225] h-[100vh] space-y-5 p-3'>
                <div className="bg-[#2f3136] rounded-2xl h-16 w-16">
                    <Link to='/'>
                    <img src={DiscordMiniIcon} alt="miniIcon" className='h-16 w-16 rounded-2xl' />
                    </Link>
                </div>
                <div className="bg-[#2f3136] rounded-2xl h-16 w-16">
                    <img src={NewLine} alt="newLine" className='h-16 w-16 rounded-2xl' />
                </div>
                <div className="bg-[#2f3136] rounded-full h-16 w-16">
                    <img src={Plus} alt="plus" className='h-10 w-10 mt-3 ml-3' />
                </div>
                <div className="bg-[#2f3136] rounded-full h-16 w-16">
                    <img src={Compass} alt="compass" className='h-10 w-10 mt-3 ml-3' />
                </div>
                <div className="bg-[#4f545c] rounded-full h-16 w-16">
                    <img src={Download} alt="download" className='h-10 w-10 mt-2 ml-3 rounded-full' />
                </div>
            </div>
            <div className='bg-[#2f3136] h-[100vh] w-[20vw] p-4'>
              <ul className='text-white space-y-4 text-lg'>
                  <li>newLine</li>
                  <li className="text-[#b9bbbe]"># rules</li>
                  <li className="text-[#b9bbbe]">TEXT CHANNELS</li>
                  <li># <span className="text-[#b9bbbe]">algorithms</span></li>
                  <li># <span className="text-[#b9bbbe]">announcements</span></li>
                  <li># <span className="text-[#b9bbbe]">blogging</span></li>
                  <li># <span>collaborators</span></li>
                  <li># <span>course-ideas</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                  <li># <span className="text-[#b9bbbe]">machine-learning</span></li>
                
              </ul>
            </div>
            <div className='w-[100vw] bg-[#292b2f]'>
                <div className='bg-[#292b2f] space-x-8 text-lg p-2 flex justify-between'>
                    <div>
                        <h2 className='text-[#b9bbbe] text-2xl'># <span className='text-white text-lg'>Javascript</span></h2>
                    </div>
                    <div className='flex my-2 space-x-4'>
                        <img src={Bell} alt="bell" className='w-6 h-6'/>
                        <img src={Pin} alt="pin" className='w-6 h-6'/>
                        <img src={AllUsers} alt="allUsers" className='w-6 h-6'/>
                        <input type="text" placeholder='Search'/>
                        <img src={Monitor} alt="allUsers" className='w-6 h-6'/>
                        <img src={Question} alt="allUsers" className='w-6 h-6'/>

                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[77%] relative'>
                        <div>
                            <button className='text-white bg-[#3ba55d] p-2 cursor-pointer rounded-lg w-52'>Wave to</button>
                            <div>
                            <input type="text" name="" id="" placeholder="Message #undefined"/> 
                            <img src={Gift} alt="gift" />
                            <img src={Gif} alt="gif" />
                            <img src={Emoji} alt="emoji" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[23%] h-[93vh] bg-black p-4 '>
                     <h1 className='text-[#b9bbbe]'>ONLINE-3</h1>
                     <ul className='space-y-2'>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">Milad</span></li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">Batman</span></li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                         <li className='flex text-[#b9bbbe] p-1'><img src={DiscordMini} className="w-12 h-12" alt="discordMini" /><span className="mt-2 ml-4 text-lg">[x]joker[x]</span> </li>
                     </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Server1