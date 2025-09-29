import { create } from 'zustand';
import axios from 'axios';

const Api_url = "http://localhost:4000/api/template";

export const templateStore = create((set) => ({
    isloading: false,
    templates: [],
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
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set((state) => ({
                isloading: false,
                templates: [...state.templates, response.data.template],
                error: null,
                success: response.data.success || false,
            }));
            return response.data;
        } catch (error) {
            set({
                isloading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log("Error in addTemplate:", error.response);
            return { success: false, message: error.response?.data?.message || error.message };
        }
    },
    
    updateTemplate: async (templateId, updateTemplateData) => {
        set({ isloading: true });
        try {
            const response = await axios.put(`${Api_url}/${templateId}`, updateTemplateData);
            set((state) => ({
                isloading: false,
                templates: state.templates.map(template =>
                    template._id === templateId ? response.data.template : template
                ),
                error: null,
            }));
            return response.data;
        } catch (error) {
            set({
                isloading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.response);
            return { success: false, message: error.response?.data?.message || error.message };
        }
    },
    
    deleteTemplate: async (templateId) => {
        set({ isloading: true });
        try {
            const response = await axios.delete(`${Api_url}/${templateId}`);
            set((state) => ({
                isloading: false,
                templates: state.templates.filter(template => template._id !== templateId),
                error: null,
            }));
            return response.data;
        } catch (error) {
            set({
                isloading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.response);
            return { success: false, message: error.response?.data?.message || error.message };
        }
    },
    
    setsearchdata: (data) => {
        set({ searcdata: data })
    }
}));