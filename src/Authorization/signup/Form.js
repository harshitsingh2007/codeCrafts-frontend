import { useState } from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form() {
    const Navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    
    const API_URL ="https://codecrafts-backend.onrender.com";

    const [data, setdata] = useState({
        email: "",
        password: "",
    })

    const getVaue = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/api/auth/signup`, data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setdata({
                email: "", password: ""
            });
            Navigate("/");
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
        }
    }
    return (
        <div className='p-7 flex justify-center'>
            <div className='bg-white rounded-xl text-black w-[450px] h-[500px] py-4 px-4'>
                <button className='bg-black flex items-center text-center gap-3 text-[20px] py-2 px-5 w-full rounded-lg'>
                    <FcGoogle size={30} />
                    <span className='text-white'>Sign Up with Google</span>
                </button>
                <div className="flex items-center w-full my-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <form onSubmit={handleSubmit} method='POST' className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' onChange={getVaue} value={data.email} placeholder='Enter your email' required className='py-2 border-[1px] border-black rounded-lg px-2 shadow-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label htmlFor="">Password</label>
                    <div className='flex w-full items-center justify-between border border-black rounded-lg px-2 shadow-md max-w-md mx-auto'>
                        <input name='password' onChange={getVaue} value={data.password}
                            type={visible ? "text" : "password"}
                            placeholder='Enter your password'
                            required
                            className='w-full py-2 px-2 outline-none border-none bg-transparent'
                            />
                        <button
                            type="button"
                            onClick={() => setVisible(!visible)}
                            className='text-2xl text-gray-600 hover:text-black cursor-pointer'
                            >
                            {visible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                        </button>
                    </div>
                </div>
                    <div className='flex flex-col gap-2 mt-2'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="" id="" required />
                            <label htmlFor="" className='ml-2'>I agree to the Terms of Service and Privacy Policy</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='ml-2'>I want to receive updates and special offers</label>
                        </div>
                    </div>
                    <button className='bg-black py-2 px-4 text-white rounded-lg'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
