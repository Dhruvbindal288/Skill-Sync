/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import useConnectionStore from '../store/useConnectionStore'
function Notification() {
  const {getAllRequest}=useConnectionStore()
  const [requests,setRequest]=useState([])
useEffect(()=>{
const fetchrequests= async ()=>{
 const data= await getAllRequest()
 setRequest(data);
}
},[getAllRequest]);
  return (
    <div>
      <h1>All Notification</h1>
      
        {requests.length >0 ? (<div>
{requests.map((req)=>{
<div>
  <h1 className="text-center text-gray-500" key={req._id}>{req.name}</h1>
</div>
 
 })}
  </div> ):(<p>No request found</p>)}

        
      
    </div>
  )
}

export default Notification
  // Home chats notifications brwoseskills profile

  //Chats -----> vedio call