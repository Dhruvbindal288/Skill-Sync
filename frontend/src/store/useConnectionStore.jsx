/* eslint-disable no-unused-vars */
import {create } from "zustand"
import { axiosInstance } from "../lib/axios_init";
import { toast } from 'react-toastify';
const useConnectionStore=create((set)=>({
    sendRequest : async (receiverId) => {
  try {
    const res = await axiosInstance.post(`/request/send-request/${receiverId}`);
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to send request");
  }
}

}))


export default useConnectionStore;