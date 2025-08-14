/* eslint-disable no-unused-vars */
import React from 'react'
import useMessageStore from '../store/useMessageStore'
import { useEffect } from 'react'
function MessageContainer() {
 const {getMessage,messages}=useMessageStore()
 useEffect(()=>{
    getMessage()
 },[getMessage])
    return (
    <div>
      
    </div>
  )
}

export default MessageContainer
