/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import zustand from 'zustand';
import { axiosInstance } from '../lib/axios_init';


export const useauthStore=zustand.create((set)=>({
user:null,
userSignup:async(res)=>{
    try {
        const response=await axiosInstance.post('/signup',res)
        set({user:response.data.user})
    } catch (error) {
        console.log("Error in signin user--frontend",error.message)
        res.status(200).json({message:'Internal Server Error'})
    }
}



}));