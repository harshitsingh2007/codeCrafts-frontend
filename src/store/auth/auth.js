import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const userAuthStore = create(
  persist(
    (set) => ({
      isLoading: false,
      isauth: false,
      user: null,
      userId: null,
      error: null,
      message: "",

      // Email/Password Signup
      signup: async (name, email, password, Identity, phoneNo) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(
            `${API_URL}/signup`,
            { name, email, password, Identity, phoneNo },
            { withCredentials: true }
          );
          const responseData = response.data;

          set({
            isLoading: false,
            user: responseData.user || null,
            isauth: true,
            userId: responseData.user?._id || null,
            message: responseData.message || "Signup successful",
            error: null,
          });

          return { success: true, ...responseData };
        } catch (error) {
          const errorMsg = error.response?.data?.message || error.message;
          set({ isLoading: false, error: errorMsg });
          return { success: false, message: errorMsg };
        }
      },

      // Email/Password Login
      login: async (email, password) => {
        set({ isLoading: true, isauth: false, error: null });
        try {
          const res = await axios.post(
            `${API_URL}/login`,
            { email, password },
            { withCredentials: true }
          );

          const user = res.data.user;

          set({
            isLoading: false,
            user: user || null,
            isauth: true,
            userId: user?._id || null,
            message: res.data.message || "Login successful",
            error: null,
          });

          return { success: true, message: res.data.message, user, userId: user?._id };
        } catch (error) {
          const errorMsg = error.response?.data?.message || error.message;
          set({ isLoading: false, error: errorMsg });
          return { success: false, message: errorMsg };
        }
      },

      // Logout
      logout: async () => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.get(`${API_URL}/logout`, { withCredentials: true });
          if (res.data.success) {
            localStorage.removeItem("auth-storage");
            set({
              isLoading: false,
              user: null,
              isauth: false,
              userId: null,
              message: res.data.message || "Logout successful",
              error: null,
            });
          } else {
            set({ isLoading: false, error: res.data.message || "Logout failed" });
          }
        } catch (error) {
          set({ isLoading: false, error: error.response?.data?.message || error.message });
        }
      },

      // Verify Email
      verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_URL}/verify-email`, { code }, { withCredentials: true });
          set({ isLoading: false, message: res.data.message, error: null, isauth: true });
          return res.data;
        } catch (error) {
          const errorMsg = error.response?.data?.message || error.message;
          set({ isLoading: false, error: errorMsg });
          throw new Error(errorMsg);
        }
      },

      // Forgot Password
      forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_URL}/forgot-password`, { email }, { withCredentials: true });
          set({ isLoading: false, message: res.data.message });
          return { success: res.data.success, message: res.data.message };
        } catch (error) {
          const errorMsg = error.response?.data?.message || error.message;
          set({ isLoading: false, error: errorMsg });
          throw new Error(errorMsg);
        }
      },

      // Reset Password
      resetPassword: async (password, token) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_URL}/reset-password`, { password, token }, { withCredentials: true });
          set({ isLoading: false, message: res.data.message, isauth: false, error: null });
          return { success: true, message: res.data.message };
        } catch (error) {
          const errorMsg = error.response?.data?.message || error.message;
          set({ isLoading: false, error: errorMsg });
          return { success: false, message: errorMsg };
        }
      },
    }),
    {
      name: "auth-storage", 
      getStorage: () => localStorage,
    }
  )
);
