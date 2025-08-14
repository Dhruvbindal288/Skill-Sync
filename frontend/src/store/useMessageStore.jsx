/* eslint-disable no-unused-vars */
import {create} from 'zustand'
import { axiosInstance } from '../lib/axios_init'
import { toast } from 'react-toastify';
const useMessageStore=create((set)=>({
    sidebarUsers: [],
    getUserForSideBar:async()=>{
        try {
            let res=await axiosInstance.get("/messages/sidebar-users")
              set({ sidebarUsers: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message || "Server Error")
        }
    }
}));



export default useMessageStore