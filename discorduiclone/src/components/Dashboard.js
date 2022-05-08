import React, { useState } from 'react'
import DiscordMiniIcon from '../assets/discord_mini.png'
import NewLine from '../assets/new_line.png'
import Plus from '../assets/plus.svg'
import Compass from '../assets/compass_icon.svg'
import Download from '../assets/download_green.png'
import Friends from '../assets/friends.png'
import Nitro from '../assets/nitro_icon.png'
import NoOnline from '../assets/no_online_friends.svg'
import stageDiscovery from '../assets/stage_discovery.png'
import Addfriend from './Addfriend'
import Pending from '../assets/pending_users_icon.svg'

const Dashboard = () => {
    const [searchVisible, setSearchVisible] = useState(false)

    const toggleButton = () => {
        setSearchVisible(searchVisible => !searchVisible)
    }

    return (
        <div className='flex'>
            <div className='flex flex-col bg-[#202225] h-[100vh] space-y-5 p-3'>
                <div className="bg-[#2f3136] rounded-2xl h-16 w-16">
                    <img src={DiscordMiniIcon} alt="miniIcon" className='h-16 w-16 rounded-2xl' />
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
            <div className='bg-[#2f3136] h-[100vh]'>
                <input type="text" placeholder="Find or start a conversation" className='bg-[#202225] my-4 mx-2 w-64 p-2' />
                <p className='bg-[#4f545c] m-2 flex p-2 text-white'><img src={Friends} alt="Friends" className='h-6 mr-3' />Friends</p>
                <p className='text-[#72767d] p-2 flex'><img src={stageDiscovery} alt="Friends" className='h-6 mr-3' />Stage Discovery</p>
                <p className='text-[#72767d] p-2 flex'><img src={Nitro} alt="Nitro" className='h-6 mr-3' />Nitro</p>
                <p className='text-[#72767d] p-2'>DIRECT MESSAGES <span className='text-white text-3xl ml-24'>+</span></p>
                <div className='flex p-2'>
                    <div className='h-11 w-11 bg-[#4f545c] rounded-full'></div>
                    <div className='h-8 w-52 bg-[#4f545c] rounded-3xl mt-2 ml-2'></div>
                </div>
            </div>
            <div className='w-[100vw] bg-[#292b2f]'>
                <div className='border-b-2 border-black'>
                    <ul className='flex bg-[#292b2f] space-x-8 text-lg py-2'>
                        <li></li>
                        <li className='text-white p-2 flex'><img src={Friends} alt="" className='mr-2' /> Friends</li>
                        <li className='text-white p-2'>Online</li>
                        <li className='text-[#b9bbbe] p-2'>All</li>
                        <li className='text-[#b9bbbe] p-2'>Pending</li>
                        <li className='text-[#b9bbbe] p-2'>Blocked</li>
                        <li className='text-white bg-[#3ba55d] p-2 rounded-2xl' onClick={toggleButton}>Add Friend</li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className='w-[60%] relative'>
                        <div className='p-4'>
                            {searchVisible && <Addfriend />}
                        </div>
                        {searchVisible ? (
                            <div className='top-72 right-32 absolute'>
                                <img src={Pending} alt="" className='h-60' />
                                <p className='text-[#b9bbbe] mt-3 ml-12'>Wampus is waiting on friends. You don't have to though</p>
                            </div>
                        ) : (
                            <div className='top-72 right-32 absolute'>
                                <img src={NoOnline} alt="" className='h-60' />
                                <p className='text-[#b9bbbe] mt-3 ml-12'>No one's around to play with Wampus</p>
                            </div>
                        )}
                    </div>
                    <div className='w-[40%] border-l-2 h-[91vh] border-[#b9bbbe]'>
                        <h1 className='text-white text-2xl font-bold p-3'>Active Now</h1>
                        <p className='text-white text-center text-lg font-bold'>It's quiet for now...</p>
                        <p className='text-[#b9bbbe] text-lg text-center'>When a friend starts an activity-like playing a game or <br /> hanging out on voice-we'll show it here!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard