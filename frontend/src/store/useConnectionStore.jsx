/* eslint-disable no-unused-vars */
import {create } from "zustand"
import { axiosInstance } from "../lib/axios_init";
import { toast } from 'react-toastify';
const useConnectionStore=create((set)=>({

  getAllRequest:async()=>{
try {
  const res=axiosInstance.get("/request/request")
  toast.success(res.data.message);
return (await res).data
} catch (error) {
  toast.error(error.message?.data?.message || "Failed to respond")
}
  
  }, 
  
  sendRequest : async (receiverId) => {
  try {
    const res = await axiosInstance.post(`/request/send-request/${receiverId}`);
    
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to send request");
  }
},
respondToRequest:async(requestId,action)=>{
  try {
    let res=axiosInstance.post(`/request/respond-request/${requestId}`,{action});
    return res.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to respond");
  }
}

}))


export default useConnectionStore;