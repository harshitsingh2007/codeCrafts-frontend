import React from 'react';
import { useNavigate } from 'react-router-dom';
import codecraft from "../../images/codecrafts.png";

function Body() {
    const Navigate = useNavigate();
    const path = window.location.pathname;
    const title = path.includes('login') ? 'Login' : 'Signup';

    return (
        <>
        <div className='border-b-2 border-gray-500 py-2 pl-4 sm:pl-8 md:pl-16 mb-4 font-inter'>
             <h1 className='font-bold text-lg sm:text-xl'>CodeCrafts</h1>
        </div>
        <div className='flex flex-col items-center justify-center font-inter px-4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4'>{`${title} to CodeCrafts`}</h1>
            {title === 'Signup' && (
                <p className='text-sm sm:text-base md:text-lg text-center'>
                    Already have a account?
                    <button 
                        onClick={() => Navigate('/login')} 
                        className='font-bold ml-2 underline hover:text-blue-500 break-words'
                    >
                        Login
                    </button>
                </p>
            )}
        </div>
        </>
    );
}

export default Body;