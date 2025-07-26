import {create} from 'zustand';
import axios from 'axios'
const API_URL = "https://codecrafts-backend.onrender.com/api/auth";
export const userAuthStore= create((set)=>({
    isLoading:false,
    isauth:false,
    error:null,
    user:null,
    message:"",
    ischecking:false,
    signup:async(email,password,username)=>{
        set({isLoding:true,})
            try {
                const response=await axios.post(`${API_URL}/signup`,{email,password})
                console.log(response.data)
            } catch (error) {
                
            }
    }
}))