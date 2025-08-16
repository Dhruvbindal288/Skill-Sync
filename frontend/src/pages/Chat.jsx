import React from 'react'
import SideBarUser from '../components/SideBarUser';
import MessageContainer from '../components/MessageContainer';

function Chat() {
  return (
    <div className='flex flex-col sm:flex-row h-screen w-screen'>
      <SideBarUser />
      <MessageContainer />
    </div>
  )
}

export default Chat;
