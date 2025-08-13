/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { axiosInstance } from '../lib/axios_init';
import { toast } from 'react-toastify';


const useskillStore=create((set)=>({
user:null,
loading:false,
completeprofile:async(data)=>{
    try {
         const res =axiosInstance.post('/auth/completeprofile',data);
         set({ user: res.data.user });
         toast.success(res.data.message || 'Skills added successfully');
    } catch (error) {

        toast.error(error.response?.data?.message || 'Failed to update skills');
    }finally{
        set({loading:false})
    }
   
},

allUser:async()=>{

    try {
          const res=await axiosInstance.get('/skills/getUsers')
           return res.data;
    } catch (error) {
        toast.error("Failed to get user")
    }
  
}

}));



export default useskillStore;