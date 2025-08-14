import React from 'react';
import { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { userAuthStore } from '../../store/auth/auth.js';
import { useNavigate } from 'react-router-dom';
export default function VerifyEmai() {
  const Navigate=useNavigate()
    const {verifyEmail } = userAuthStore();
    const [code, setCode] = useState("");

    const setgetcode = (e) => {
        setCode(e.target.value);
    };

    const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try {
        const res = await verifyEmail({ code }); 
        if (res && res.success) {
            alert("Email verified successfully");
            Navigate('/');
        } else {
            alert(res?.message || "Verification failed");
        }
    } catch (error) {
        alert(error.message || "Verification failed. Please try again.");
        console.error("Verification error:", error);
    }
};
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <div className="flex justify-center mb-4 text-indigo-600 text-5xl">
          <FaEnvelopeOpenText />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
        <p className="text-gray-600 mb-6">
          We've sent a verification code to your email address. Please enter the code below to verify your account.
        </p>

        <form action="" method='POST' onSubmit={handleVerifyEmail}>
        <input
          type="text" onChange={setgetcode} value={code}
          name="verificationCode"
          placeholder="Enter verification code"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        />

       
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition mb-3" type="submit">
          Verify Email 
        </button>
        </form>

        
        <p className="text-sm text-gray-500">
          Didn't get the code? <a href="#" className="text-indigo-600 hover:underline">Resend Code</a>
        </p>
      </div>
    </div>
  );
}