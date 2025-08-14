import {create} from 'zustand';
import axios from 'axios';

const Api_url="https://codecrafts-backend.onrender.com/api/template";

export const templateStore = create((set)=>({
    isloading: false,
    templates: [],
    error: null,
    fetchTemplate:async () => {
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
        addTemplate:async(templateData)=>{
                set({ isloading: true });
                try {
                const response = await axios.post(`${Api_url}/add-template`,templateData);
                set({
                    isloading: false,
                    templates: [...set.templates, response.data.template],
                    error: null,
                });
            } catch (error) {
                set({
                    isloading: false,
                    error: error.response?.data?.message || error.message,
                });
                console.log(error.response);
            }
    },
    updateTemplate:async(set,templateId,updateTemplateData)=>{
        set({ isloading: true });
        try {
            const response = await axios.put(`${Api_url}/${templateId}`, updateTemplateData);
            console.log(response.data);
            set({
                isloading: false,
                templates: set.templates.map(template => 
                    template._id === templateId ? response.data.template : template
                ),
                error: null,
            });
        } catch (error) {
            set({
                isloading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.response);
        }
    },
    deleteTemplate:async (set, templateId) => {
        set({ isloading: true });
        try {
            const response = await axios.delete(`${Api_url}/${templateId}`);
            console.log(response.data);
            set({
                isloading: false,
                templates: set.templates.filter(template => template._id !== templateId),
                error: null,
            });
        } catch (error) {
            set({
                isloading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.response);
        }
    },
}))