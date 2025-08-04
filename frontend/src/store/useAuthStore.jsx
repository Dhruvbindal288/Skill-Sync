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
  }
}));

export default useAuthStore;
