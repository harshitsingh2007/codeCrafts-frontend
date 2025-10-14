import axios from "axios";
import { create } from "zustand";
const api_url = "https://codecrafts-backend.onrender.com/api/cart";

const useCartStore = create((set) => ({
  isloading: false,
  success: null,
  error: null,
  totalEarning: 0,
  cartItems: [],
  addtoCart: async (id) => {
    set({ isloading: true });
    try {
      const res = await axios.post(`${api_url}/add-to-cart/${id}`, {}, { withCredentials: true });

      set({ isloading: false });

      return { success: true, message: res.data.message, cart: res.data.cart };
    } catch (error) {
      console.log("error in adding to the cart", error);

      const errorMsg = error.response?.data?.message || "Something went wrong";

      set({ isloading: false });
      return { success: false, message: errorMsg };
    }
  },
 getCartItems: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get(`${api_url}/get-cart-items`, { withCredentials: true });
      set({
        isLoading: false,
        cartItems: res.data.cartItems || [],
        success: true,
      });
      return { success: true, cartItems: res.data.cartItems };
    } catch (error) {
      console.log("Error fetching cart items:", error);
      const errorMsg = error.response?.data?.message || "Something went wrong";
      set({ isLoading: false, error: errorMsg, cartItems: [] });
      return { success: false, message: errorMsg };
    }
  },
  removeitems:async(id)=>{
    set({isloading:true})
    try {
      const res=await axios.post(`${api_url}/remove-from-cart`,{id},{withCredentials:true})
      set({isloading:false,
           success:true
        }) 
      return {success:true,message:res.data.message}
    } catch (error) {
      console.log("error in removing product")
    }
  },
  checkoutCart: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.post(`${api_url}/checkout`, {}, { withCredentials: true });

      set({
        isLoading: false,
        success: true,
        cartItems: [],
      });

      return {
        success: true,
        message: res.data.message,
        totalAmount: res.data.totalAmount,
      };
    } catch (error) {
      console.error("Error during checkout:", error);
      const errorMsg = error.response?.data?.message || "Checkout failed";
      set({ isLoading: false, error: errorMsg });
      return { success: false, message: errorMsg };
    }
  },
  getMyEarning: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get(`${api_url}/earning/my-earning`, { withCredentials: true });
      set({
        isLoading: false,
        totalEarning: res.data.totalEarning || 0,
      });
      return { success: true, totalEarning: res.data.totalEarning };
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to fetch earnings";
      set({ isLoading: false, error: errorMsg });
      return { success: false, message: errorMsg };
    }
  },
  
}));



export default useCartStore;

