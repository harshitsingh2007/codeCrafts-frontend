import { create } from 'zustand';
import axios from 'axios';

const Api_url = "https://codecrafts-backend.onrender.com/api/template";

axios.defaults.withCredentials = true;

export const templateStore = create((set) => ({
  isloading: false,
  templates: [],
  OwnerTemplate: [],
  savedTemplates: [], 
  error: null,
  success: null,
  searcdata: "",

  fetchTemplate: async () => {
    set({ isloading: true });
    try {
      const response = await axios.get(`${Api_url}/discover`);
      set({
        isloading: false,
        templates: response.data.templates || [],
        error: null,
      });
    } catch (error) {
      set({
        isloading: false,
        error: error.response?.data?.message || error.message,
      });
    }
  },

  addTemplate: async (templateData) => {
    set({ isloading: true });
    try {
      const response = await axios.post(`${Api_url}/add-template`, templateData, {
        headers: { 'Content-Type': 'application/json' }
      });
      set((state) => ({
        isloading: false,
        templates: [...state.templates, response.data.template],
        OwnerTemplate: [...state.OwnerTemplate, response.data.template],
        error: null,
        success: response.data.success || false,
      }));
      console.log(response.data);
      return response.data;
    } catch (error) {
      set({
        isloading: false,
        error: error.response?.data?.message || error.message,
      });
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },

  getOwnerTemplate: async () => {
    set({ isloading: true });
    try {
      const res = await axios.get(`${Api_url}/owner-templates`);
      set({
        isloading: false,
        OwnerTemplate: res.data.templates || [],
        error: null,
      });
    } catch (error) {
      set({
        isloading: false,
        error: error.response?.data?.message || error.message,
      });
      console.log("Error in getOwnerTemplate:", error.response);
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },

  removeOwnerTemplate: async (id) => {
    set({ isloading: true, error: null });
    try {
      const res = await axios.post(`${Api_url}/delete-owner-template`, { id }, { withCredentials: true });
      const { success, message } = res.data;
      if (success) {
        set((state) => ({
          isloading: false,
          OwnerTemplate: state.OwnerTemplate.filter(t => t._id !== id),
          error: null,
          success: true,
        }));
      } else {
        set({ isloading: false, error: message || "Delete failed", success: false });
      }
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({ isloading: false, error: message, success: false });
      return { success: false, message };
    }
  },

  getCommentsOnTemplate: async (id) => {
    set({ isloading: true });
    try {
      const res = await axios.get(`${Api_url}/comment/${id}`);
      set({
        isloading: false,
        error: null,
      });
      return res.data.comment || [];
    } catch (error) {
      set({
        isloading: false,
        error: error.response?.data?.message || error.message,
      });
      console.log("Error in getCommentsOnTemplate:", error.response);
      return { success: false, message: error.response?.data?.message || error.message }
    }
  },

  CommnetOnTemplate: async (id, comment) => {
    set({ isloading: true });
    try {
      const res = await axios.post(`${Api_url}/comment/${id}`, { comment }, {
        headers: { 'Content-Type': 'application/json' }
      });
      set({
        isloading: false,
        error: null,
      });
      return res.data;
    } catch (error) {
      set({
        isloading: false,
        error: error.response?.data?.message || error.message,
      });
      console.log("Error in CommnetOnTemplate:", error.response);
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },

  saveTemplate: async (id) => {
    set({ isloading: true });
    try {
      const res = await axios.post(`${Api_url}/save-template/${id}`)
      set({
        isloading: false,
        error: null,
      })
      return res.data;
    } catch (error) {
      console.log("Error in saveTemplate:", error.response);
      return { success: false, message: error.response?.data?.message || error.message }
    }
  },

  getSavedTemplate: async () => {
    set({ isloading: true });
    try {
      const response = await axios.get(`${Api_url}/save-template`);
      set({
        isloading: false,
        savedTemplates: response.data.template || [], // STORE THE DATA IN STATE
        error: null,
      });
      return response.data.template || [];
    } catch (error) {
      set({ isloading: false });
      console.log("Error in getSavedTemplate:", error.response);
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },

  deleteSavedTemplate: async (id) => {
    set({ isloading: true });
    try {
      const res = await axios.post(`${Api_url}/delete-saved-template`, { id });
      if (res.data.success) {
        set((state) => ({
          isloading: false,
          savedTemplates: state.savedTemplates.filter(t => t._id !== id),
          error: null,
        }));
      } else {
        set({ isloading: false, error: res.data.message });
      }
      return res.data;
    } catch (error) {
      set({ isloading: false });
      console.log("Error in deleteSavedTemplate:", error.response);
      return { success: false, message: error.response?.data?.message || error.message };
    }
  },
}));