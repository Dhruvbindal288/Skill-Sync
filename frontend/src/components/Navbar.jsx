import React from 'react'
import logopng from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='h-14 flex items-center justify-between p-6 bg-blue-50 shadow-inner'> 
      <div className='h-13 w-14'><img src={logopng} alt="Skill-Sync"  className='w-full h-full'/></div>
      <ul className='flex gap-16'>
        <li className='hover:text-blue-400'><NavLink to={"/"}>Home</NavLink></li>
            <li className='hover:text-blue-400'><NavLink to={"/aboutus"}>AboutUs</NavLink></li>
                <li className='hover:text-blue-400'><NavLink to={"/browseskill"}>BrowseSkills</NavLink></li>
                 <li className='hover:text-blue-400'><NavLink to={"/chats"}>Chats</NavLink></li>
                 <li className='hover:text-blue-400'><NavLink to={"/requests"}>Requests</NavLink></li>
<li className='hover:text-blue-400'>Profile</li>
      </ul>
    </div>
  )
}

export default Navbar
