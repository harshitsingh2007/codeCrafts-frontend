import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:4000/api/freeLancer";

export const freeLancerStore = create((set) => ({
  isLoading: false,
  error: null,
  message: "",
  freelancers: [],
  freelancerProfile: null,

  fetchAllFreelancer: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get(`${API_URL}/all`);
      const responseData = res.data;

      set({
        isLoading: false,
        freelancers: responseData.data || [],
        message: responseData.message || "Fetched successfully",
        error: null,
      });

      return {
        success: true,
        ...responseData,
      };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({
        isLoading: false,
        error: errorMsg,
      });
      return {
        success: false,
        message: errorMsg,
      };
    }
  },

  createFreelancer: async (freelancerData) => {
    set({ isLoading: true, error: null });
    
    const transformedData = {
      name: freelancerData.name,
      email: freelancerData.email,
      skills: freelancerData.skills,
      about: freelancerData.about,
      phoneNo: freelancerData.phoneNo,
      Location: freelancerData.Location,
      Language: freelancerData.Language,
      role: freelancerData.role,
      Image: freelancerData.Image
    };

    console.log("🚀 Sending freelancer data to backend:", transformedData);

    try {
      const res = await axios.post(`${API_URL}/create`, transformedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const responseData = res.data;
      console.log("✅ Backend response:", responseData);
      
      set({
        isLoading: false,
        message: responseData.message,
        error: null,
      });
      
      return {
        success: true,
        ...responseData
      };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      console.error("❌ Error creating freelancer:", errorMsg);
      
      set({
        isLoading: false,
        error: errorMsg,
      });
      
      return {
        success: false,
        message: errorMsg
      };   
    }
  }
}));