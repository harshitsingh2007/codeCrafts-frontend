import React, { useEffect } from 'react'
import { userAuthStore } from '../store/auth/auth'
import { useParams } from 'react-router-dom';
import { useContactStore } from '../store/Contact/Contact';

export default function Contact() {
  const {templateData, getAllContacts, isLoading, error} = useContactStore();
  const {id} = useParams();
    
  useEffect(() => {
    getAllContacts(id);
  }, [getAllContacts])
  
  if (isLoading) {
    return <div className='bg-black text-white px-10'>Loading messages...</div>
  }
  
  if (error) {
    return <div className='bg-black text-white px-10'>Error: {error}</div>
  }
  
  return (
    <div className='bg-black text-white px-10'>
      <h1 className='font-bold'>Messages</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {templateData.length === 0 ? (
        <p>No messages found</p>
      ) : (
        templateData.map((data) => {
          return(
            <div key={data._id} className='border border-white p-5 my-5 rounded-lg'>
              <h1 className='font-bold text-xl'>
                Message ID: {data._id}
              </h1>
              <p className='mt-3'>{data.message}</p>
              <p className='text-sm text-gray-400 mt-2'>
                Created: {new Date(data.createdAt).toLocaleString()}
              </p>
              <button>reply</button>
            </div>
          )
        })
      )}
      </div>
    </div>
  )
}