import axios from 'axios'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
export default function FormLogin() {
  const Navigate = useNavigate()

const API_URL = "https://codecrafts-backend.onrender.com";
const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const getValue = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
    }

const handleLogin= async(e)=>{
        console.log("login")
        e.preventDefault();
        try {
        const response = await axios.post(`${API_URL}/api/auth/login`, data, {
        withCredentials: true,
          headers: {
        'Content-Type': 'application/json',
        },
        });

        console.log(response.data);
        setdata({
                email:"",
                password:"",
        })
        Navigate("/")
                
        } catch (error) {
                console.error("Login error:", error.response?.data || error.message);
        }
}

return (
 <div className='mb-0 mt-3 flex justify-center'>
                     <div className='bg-white rounded-xl text-black w-[450px] h-[460px] py-4 px-4'>
                             <button className='bg-black flex items-center text-center gap-3 text-[20px] py-2 px-5 w-full rounded-lg'>
                                     <FcGoogle size={30} />
                                     <span onClick={()=>Navigate('/signup')} className='text-white'>Sign Up with Google</span>
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
                                        <input type="email" name='email' onChange={getValue} placeholder='Enter your email' required className='py-2 border-[1px] border-black rounded-lg px-2 shadow-md' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                        <label htmlFor="">Password</label>
                                        <input type="password" name='password' onChange={getValue} placeholder='Enter your password' required className='py-2 border-[1px] border-black rounded-lg px-2 shadow-md' />
                                </div>
                     <button className='bg-black py-2 text-white rounded-lg '>Contine with Email</button>
                     </div>

                     <div className='flex flex-col items-center justify-center mt-3 gap-1'>
                     <p>Forgot your Password?</p>
                     <p>New at CodeCrafts?<span onClick={()=>Navigate('/signup')} className='ml-2 underline cursor-pointer'>Create Account</span></p>
                    </div>   
            </form>
        </div>
</div>
)
}
