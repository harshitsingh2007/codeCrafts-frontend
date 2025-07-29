import React from 'react';
import { useNavigate } from 'react-router-dom';
import codecraft from "../../images/codecrafts.png";
function Body() {
    const Navigate=useNavigate()
    const path = window.location.pathname;
    const title = path.includes('login') ? 'Login' : 'Signup';

    return (
        <>
        <div className='border-b-2 border-gray-500 py-3 pl-[4em] mb-4'>
            <img src={codecraft} alt=""  className='w-[150px]'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[3em] font-bold'>{`${title} to CodeCrafts`}</h1>
            {title === 'Signup' && <p className='text-[18px]'>Already have a account?<button onClick={()=>Navigate('/login')} className='font-bold ml-2 underline hover:text-gray-700'>Login</button></p>}
        </div>
        </>
    );
}

export default Body;