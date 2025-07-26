import React from 'react';
import CodeCrafts from '../codecrafts.png';
import { Link } from 'react-router-dom';

export default function Auth() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">

            <div className="mb-12 ">
                <img 
                    src={CodeCrafts} 
                    alt="CodeCrafts Logo" 
                    className="h-24 w-auto object-contain"
                />
            </div>

        
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link 
                    to='/client' 
                    className="group transition-all duration-300 hover:scale-105"
                >
                    <div className="h-full border-2  border-indigo-300 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all flex flex-col items-center justify-center">
                        <div className="text-indigo-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors text-center">
                            Buy a Website
                        </h1>
                        <p className="mt-2 text-gray-600  text-center">
                            Find the perfect website solution for your business
                        </p>
                    </div>
                </Link>

                <Link 
                    to='/admin/Mainpage' 
                    className="group transition-all duration-300 hover:scale-105"
                >
                    <div className="h-full border-2 border-indigo-300 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all flex flex-col items-center justify-center">
                        <div className="text-indigo-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors text-center">
                            Start Freelancing
                        </h1>
                        <p className="mt-2 text-gray-600 text-center">
                            Offer your skills and build amazing websites for clients
                        </p>
                    </div>
                </Link>
            </div>


            <p className="mt-12 text-gray-500 text-sm">
                Choose your path to begin your CodeCrafts journey
            </p>
        </div>
    );
}