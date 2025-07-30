import {create} from 'zustand';
import axios from 'axios'
const API_URL = "https://codecrafts-backend.onrender.com/api/auth";
export const userAuthStore = create((set) => ({
    isLoading: false,
    isauth: false,
    error: null,
    user: null,
    message: "",
    ischecking: false,
    signup: async (email, password) => {
        set({ isLoading: true });
        try {
            const response = await axios.post(`${API_URL}/signup`, { email, password });
            console.log(response.data);
            set({
                isLoading: false,
                user: response.data.user || null,
                isauth: true,
                error: null,
                message: response.data.message || "Signup successful"
            });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.response);
        }
    },

    login: async (email, password) => {
        set({ isLoading: true });
        try {
            const res = await axios.post(`${API_URL}/login`, { email, password });
            console.log(res.data);
            set({
                isLoading: false,
                user: res.data.user || null,
                isauth: true,
                message: res.data.message || "Login successful"
            });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.message);
        }
    },
    logout: async () => {
        set({ isLoading: true });
        try {
            const res = await axios.get(`${API_URL}/logout`);
            console.log(res.data);
            set({
                isLoading: false,
                user: null,
                isauth: false,
                message: res.data.message || "Logout successful"
            });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.message || error.message,
                isauth: true
            });
            console.log(error.message);
        }
    },
    forgotPassword:async(email)=>{
        set({ isLoading: true });
        try {
            const res = await axios.post(`${API_URL}/forgot-password`, { email });
            console.log(res.data);
            set({
                isLoading: false,
                message: res.data.message || "Password reset link sent",
                error: null
            });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.message);
        }
    },
    verifyEmail:async (code)=>{
        set({ isLoading: true });
        try {
            const res = await axios.post(`${API_URL}/verify-email`, { code });
            console.log(res.data);
            set({
                isLoading: false,
                message: res.data.message || "Email verified successfully",
                error: null
            });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.message || error.message,
            });
            console.log(error.message);
        }
    }
    
}));
