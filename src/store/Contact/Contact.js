import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:4000/api/contact";

export const useContactStore = create((set) => ({
  contactMessage: "",
  isLoading: false,
  error: null,
  success: null,
  templateData: [],
  getAllContacts: async (id) => {
    set({ isLoading: true, error: null, success: null });
    try {
      const res = await axios.get(`${API_URL}/getallcontacts/${id}`);
      
      set({
        templateData: res.data.data || [], 
        isLoading: false,
        contactMessage: res.data.message,
        success: res.data.success,
        error: null,
      });
      return res.data;
    } catch(error) {
      console.log("Error in getAllContacts:", error);
      set({
        isLoading: false,
        error: error.response?.data?.message || error.message,
        success: false
      });
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },
  createContact: async (messageData, id) => {
    set({ isLoading: true, error: null, success: null });
    
    try {
      const res = await axios.post(`${API_URL}/createcontact/${id}`, {
        message: messageData
      });
      
      set({
        isLoading: false,
        contactMessage: res.data.message,
        success: res.data.success,
        error: null,
      });
      
      return res.data; 
    } catch (error) {
      console.log("Error in createContact:", error);
      set({
        isLoading: false,
        error: error.response?.data?.message || error.message,
        success: false
      });
      
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },
  replycontactt:async (replydata,id)=>{
    set({isLoading:true,error:null,success:null});

    try {
      const res=await axios.post(`${API_URL}/replycontact/${id}`,{
        reply:replydata
      });
      
      
    } catch (error) {
      
    }
  }
}));