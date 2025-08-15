import {create} from 'zustand';
import axios from 'axios'
const API_URL = "http://localhost:4000/api/auth";
export const userAuthStore = create((set) => ({
    isLoading: false,
    isauth: false,
    error: null,
    user: null,
    message: "",
    ischecking: false,
signup: async (name, email, password,Identity) => {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.post(`${API_URL}/signup`, {name, email, password, Identity});
        const responseData = response.data;
        set({
            isLoading: false,
            user: responseData.user || null,
            isauth: true,
            message: responseData.message || "Signup successful",
            error: null
        });
        
        return {
            success: true,
            ...responseData
        };
        
    } catch (error) {
        const errorMsg = error.response?.data?.message || error.message;
        set({
            isLoading: false,
            error: errorMsg
        });
        return {
            success: false,
            message: errorMsg
        };
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
         set({isLoading: true},{error: null});
        try {
            const res = await axios.post(`${API_URL}/forgot-password`, { email });
            set({
                isLoading: false,
                message: res.data.message || "Password reset link sent to your email",
            });

        } catch (error) {
           set({
                isLoading: false,
                error:error.res.data.message
            });
            throw error;
        }
    },
    // verifyEmail:async (code)=>{
    //     set({ isLoading: true });
    //     try {
    //         const res = await axios.post(`${API_URL}/verify-email`,code);
    //         console.log(res.data);
    //         set({
    //             isLoading: false,
    //             message: res.data.message || "Email verified successfully",
    //             error: null
    //         });
    //     } catch (error) {
    //         set({
    //             isLoading: false,
    //             error: error.response?.data?.message || error.message,
    //         });
    //         console.log(error.message);
    //     }
    // }, 


    verifyEmail: async (code) => {
    set({ isLoading: true });
    try {
        const res = await axios.post(`${API_URL}/verify-email`, { code });  // Send as object
        console.log(res.data);
        set({
            isLoading: false,
            message: res.data.message || "Email verified successfully",
            error: null
        });
        return res.data;  // Return the response data
    } catch (error) {
        set({
            isLoading: false,
            error: error.response?.data?.message || error.message,
        });
        throw error;  // Throw error to be caught in component
    }
},

    resetpassword:async(password,token)=>{
        set({isLoading:true});
        try {
            const res=await axios.post(`${API_URL}/rest-password`,{password,token})
            console.log(res.data)

            set({
                isLoading:false,
                message:res.data.message || "password reset successfully"
            })
        } catch (error) {
            set({
                isLoading:false,
                error: error.response?.data?.message || error.message,
            })
        }
    } 
}));
