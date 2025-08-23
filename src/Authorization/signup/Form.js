import { useState } from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { RiLoader2Fill } from "react-icons/ri";
import { userAuthStore } from '../../store/auth/auth.js';

export default function Form() {
    const {signup}=userAuthStore();
    const Navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [data, setdata] = useState({
        name:"",
        email: "",
        password: "",
        Identity:"",
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
    setIsLoading(true);
    try {
        const result = await signup(data.name,data.email,data.password,data.Identity);
        if (result?.success) {
            setdata({ 
                email: "",
                password: "",
                name:"",
                Identity:"",
            });
         Navigate('/verify-email');
        } else {
            alert(result?.message || "Signup failed. Please try again.");
        }

    } catch (error) {
        console.error("Signup error:", error);
        alert(error.message || "An unexpected error occurred");
    } finally {
        setIsLoading(false);
    }
}
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='bg-white rounded-xl text-black max-w  py-4 px-4 '>
                <button className='bg-black flex items-center text-center gap-3 text-[20px] py-2 px-5 w-full rounded-lg'>
                    <FcGoogle size={30} />
                    <span className='text-white'>Sign Up with Google</span>
                </button>
                <div className="flex items-center w-full my-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col mb-2'>
                        <label className='text-[16px] mb-1'>Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={data.name}
                            onChange={getVaue}
                            className='border-[1px] border-black rounded-lg py-2 px-3'
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='text-[16px] mb-1'>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={data.email}
                            onChange={getVaue}
                            className='border-[1px] border-black rounded-lg py-2 px-3'
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='text-[16px] mb-1'>Password</label>
                        <div className='relative'>
                            <input 
                                type={visible ? "text" : "password"}
                                name="password"
                                value={data.password}
                                onChange={getVaue}
                                className='border-[1px] border-black rounded-lg py-2 px-3 w-full pr-10'
                                disabled={isLoading}
                                required
                            />
                            <button 
                                type="button"
                                onClick={() => setVisible(!visible)}
                                className='absolute right-3 top-2'
                                disabled={isLoading}
                            >
                                {visible ? <MdOutlineVisibilityOff size={20} /> : <MdOutlineVisibility size={20} />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-[16px] mb-1'>Identity</label>
                        <select 
                            name="Identity"
                            value={data.Identity}
                            onChange={getVaue}
                            className='border-[1px] border-black rounded-lg py-2 px-3'
                            disabled={isLoading}
                            required
                        >
                            <option value="" disabled>Select Identity</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className='bg-black text-white py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2 disabled:opacity-50'
                    >
                        {isLoading ? (
                            <>
                                <RiLoader2Fill className="animate-spin" size={20} />
                                Signing up...
                            </>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>
            </div>
            <div className='text-center mt-4 flex flex-col items-center gap-1'>
                <p className="text-[13px] w-[300px]">By signing up, you agree to the <a href=''>Terms of Services</a> and <a href=''>Privacy Policy</a></p>
                <p className='text-[13px]'>Protected by reCAPTCHA, Terms of Services and Privacy Policy</p>
            </div>
        </div>
    )
}
