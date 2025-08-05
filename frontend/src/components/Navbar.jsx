import React from 'react'

function Navbar() {
  return (
    <div className='h-14 w-full bg-blue-50 flex items-center justify-between p-4 shadow-md'>
     <div>SKILLSYNC</div>
    <div><input type="text" placeholder='Search skills' className='hidden md:flex outline-none bg-transparent border-2 rounded-4xl  p-1 placeholder-blue-400 text-gray-700 border-blue-300'/></div>
     <div>
        <ul className='hidden md:flex  gap-6 '>
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
            <li className="hover:text-blue-600 cursor-pointer">Browse Skills</li>
            <li className="hover:text-blue-600 cursor-pointer">Signup</li>
            <li className="hover:text-blue-600 cursor-pointer">Chats</li>
     </ul>
     </div>
       <div className="md:hidden">
          <button className="text-blue-600 text-2xl">
            ☰
          </button>
        </div>
    </div>
  )
}

export default Navbar
