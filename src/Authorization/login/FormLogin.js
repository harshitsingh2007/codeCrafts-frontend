import axios from 'axios'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { RiLoader2Fill } from "react-icons/ri";
import { userAuthStore } from '../../store/auth/auth.js'

export default function FormLogin() {
        const Navigate = useNavigate()
        const { isLoading, login } = userAuthStore()
        const [data, setdata] = useState({
                email: "",
                password: "",
        })

        const getValue = (e) => {
                const { name, value } = e.target;
                setdata({
                        ...data,
                        [name]: value
                })
        }
        const handleLogin = async (e) => {
                e.preventDefault();
                try {
                     const res = await login(data.email, data.password);
                     console.log("Login response:", res); // Add this to debug
                        if (res && res.success === true) {
                                setdata({
                                        email: "",
                                        password: "",
                                });
                                Navigate('/');
                        } else {
                                alert(res?.message || "Login failed. Please try again.");
                        }

                } catch (error) {
                        console.error("Login error:", error.response?.data || error.message);
                }
        }

        return (
                <div className='mb-0 mt-3 flex justify-center px-4'>
                        <div className='bg-white rounded-xl text-black w-full max-w-[450px] min-h-[460px] py-4 px-4 sm:px-6'>
                                <button className='bg-black flex items-center text-center gap-3 text-lg sm:text-[20px] py-2 px-3 sm:px-5 w-full rounded-lg'>
                                        <FcGoogle size={30} />
                                        <span onClick={() => Navigate('/signup')} className='text-white'>Sign Up with Google</span>
                                </button>
                                <div className="flex items-center w-full my-4">
                                        <div className="flex-1 h-px bg-gray-300"></div>
                                        <span className="px-3 text-sm text-gray-500">OR</span>
                                        <div className="flex-1 h-px bg-gray-300"></div>
                                </div>
                                <form action="" method='POST' onSubmit={handleLogin} >
                                        <div className='flex flex-col gap-3'>
                                                <div className='flex flex-col gap-2'>
                                                        <label htmlFor="">Email</label>
                                                        <input type="email" name='email' onChange={getValue} placeholder='Enter your email' required className='py-2 border-[1px] border-black rounded-lg px-2 shadow-md text-sm sm:text-base' />
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                        <label htmlFor="">Password</label>
                                                        <input type="password" name='password' onChange={getValue} placeholder='Enter your password' required className='py-2 border-[1px] border-black rounded-lg px-2 shadow-md text-sm sm:text-base' />
                                                </div>
                                                <button className='bg-black py-2 text-white rounded-lg flex items-center justify-center'>
                                                        {isLoading ? <RiLoader2Fill className='animate-spin' /> : "Continue with Email"}
                                                </button>
                                        </div>

                                        <div className='flex flex-col items-center justify-center mt-3 gap-1 text-sm sm:text-base'>
                                                <p>Forgot your Password?</p>
                                                <p className='text-center'>New at CodeCrafts?<span onClick={() => Navigate('/signup')} className='ml-2 underline cursor-pointer'>Create Account</span></p>
                                        </div>
                                </form>
                        </div>
                </div>
        )
}
