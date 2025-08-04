// store/useAuthStore.js

import { create } from 'zustand';
import { axiosInstance } from '../lib/axios_init';
import { toast } from 'react-toastify';
const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  

  userSignup: async (formData) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      set({ user: response.data.user, loading: false });
     toast.success('Account created')
}
 catch (error) {
      console.error("Error in signup user -- frontend", error.response?.data?.message)
      set({loading:false})
     toast.error(error.response?.data?.message || "Signup failed. Try again.");
    }
  },

  loginUser: async(formdata) => {
   set({loading:true})
    try {
      const response=await axiosInstance.post('/auth/login',formdata);
      set({user:response.data.user,loading:false});
      toast.success('Login successfully')
    } catch (error) {
      console.log("error in loginUser--frontend",error.response?.data?.message);
      set({loading:false})
      toast.error(error.response?.data?.message || "Login failed. Try again.");
    }
   }




}));

export default useAuthStore;
