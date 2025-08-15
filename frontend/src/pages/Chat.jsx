import React from 'react'
import SideBarUser from '../components/SideBarUser';
import MessageContainer from '../components/MessageContainer';
function Chat() {
  return (
    <div className='flex h-screen w-screen gap-14'>

      <SideBarUser/>
      <MessageContainer/>

    </div>
  )
}

export default Chat;
