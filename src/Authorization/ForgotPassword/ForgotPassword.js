import { useState } from 'react';
import { userAuthStore } from '../../store/auth/auth';
export default function ForgotPassword() {
  const { forgotPassword } = userAuthStore();
  const [data, setData] = useState({ email: ''});

  const getValue = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await forgotPassword(data.email);
      if (result?.success) {
        alert("Link sent to your email");
        setData({ 
          email: ""
        });
      } else {
        alert(result?.message || "Check your email");
      }
    } catch (error) {
      console.log("Forgot password error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-800 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Forgot Password?</h2>
          <p className="text-gray-400">Enter your email to receive a reset link</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className=" text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              value={data.email} 
              onChange={getValue} 
              placeholder="Enter your email" 
              required 
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Send Reset Link
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Remember your password? 
            <a href="/login" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
