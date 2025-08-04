// store/useAuthStore.js

import { create } from 'zustand';
import { axiosInstance } from '../lib/axios_init';

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  

  userSignup: async (formData) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      set({ user: response.data.user, loading: false });
    } catch (error) {
      console.error("Error in signup user -- frontend", error.message);
      set({loading:false})
     
    }
  }
}));

export default useAuthStore;
