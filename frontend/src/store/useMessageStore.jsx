/* eslint-disable no-unused-vars */
import {create} from 'zustand'
import { axiosInstance } from '../lib/axios_init'
import { toast } from 'react-toastify';
const useMessageStore=create((set)=>({
    getUserForSideBar:async()=>{
        try {
            let res=await axiosInstance.get("/messages/sidebar-users")
        } catch (error) {
            toast.error()
        }
    }
}));



export default useMessageStore