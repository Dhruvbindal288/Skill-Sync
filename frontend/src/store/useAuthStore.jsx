/* eslint-disable no-unused-vars */


import { create } from 'zustand';
import { axiosInstance } from '../lib/axios_init';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
const useAuthStore = create((set,get) => ({
  user: null,
  loading: false,
  socket:null,
  
checkAuth:async()=>{
  try {
    set({loading:true})
    const res= await axiosInstance.get('/auth/check')
    set({user:res.data.user})
    toast.success("User is logged in");
    get().connectSocket();
  } catch (error) {
    set({user:null});
    toast.error("User is Not logged in");
    console.log("error in checkAuth:",error.response?.data?.message)
  }finally{set({loading:false})}
},
  userSignup: async (formData) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      set({ user: response.data.user, loading: false });
     toast.success('Account created')
     get().connectSocket();
}
 catch (error) {
      console.error("Error in signup user -- frontend", error.response?.data?.message)
     
     toast.error(error.response?.data?.message || "Signup failed. Try again.");
    }finally{ set({loading:false})}
  },

  loginUser: async(formdata) => {
   set({loading:true})
    try {
      const response=await axiosInstance.post('/auth/login',formdata);
      set({user:response.data.user,loading:false});
      toast.success('Login successfully');
      get().connectSocket();

    } catch (error) {
      console.log("error in loginUser--frontend",error.response?.data?.message)
      toast.error(error.response?.data?.message || "Login failed. Try again.");
    }finally{ set({loading:false})}
   },

   logoutuser:async()=>{
    set({loading:true})
    try {
      const res=await axiosInstance.get('/auth/logout')
      set({user:null,loading:false});
      toast.success("User logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      console.log("Error in logout ",error.message)
      toast.error(error.response.data.message || "Can't Logout user..Please try again")
      set({loading:false})
    }
   },
updateProfile:async(data)=>{
  try {
    const res = await axiosInstance.put('/auth/update-profile',data)
    set({user:res.data});
    toast.success("Profile image uploaded")
  } catch (error) {
    console.log("error in updateProfile",error.message)
    toast.error(error.response.data.message)
  }
},

connectSocket:()=>{
  const socket=io("http://localhost:5000");
  socket.connect();
  set({ socket:socket });
},
disconnectSocket:()=>{
  const { socket } = get();
  if (socket) {
    socket.disconnect();
    set({ socket: null });
  }
},

completeProfile:async(data)=>{
   set({loading:true})
  try {
    const res=await axiosInstance.post("/auth/complete-profile",data);
    toast.success("Profile completed",);
          set({ user: res.data.user });
          return true;
  } catch (error) {
    console.log(error.response.data.message ,"Error in complete profile frontend")
    toast.error(error.response.data.message);
    return false;
  }finally{
     set({loading:false})
  }
}


}));

export default useAuthStore;
