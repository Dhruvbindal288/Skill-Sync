/* eslint-disable no-unused-vars */
import {create} from 'zustand'
import { axiosInstance } from '../lib/axios_init'
import { toast } from 'react-toastify';
const useMessageStore=create((set)=>({
    sidebarUsers: [],
    messages:[],
    selectedUser:null,
    getUserForSideBar:async()=>{
        try {
            let res=await axiosInstance.get("/messages/sidebar-users")
              set({ sidebarUsers: res.data ||[] });

        } catch (error) {
            toast.error(error.response?.data?.message || "Server Error")
        }
    },
    getMessage:async(receiverId)=>{
        try {
            let res=await axiosInstance.get(`/messages/get-messages/${receiverId}`)
              set({ messages: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message || "Server Error")
        }
    },
    selectUser: async (user) => {
    set({ selectedUser: user });  
    if (user?._id) {
      await useMessageStore.getState().getMessage(user._id); 
    }
  },    
     
}));







export default useMessageStore