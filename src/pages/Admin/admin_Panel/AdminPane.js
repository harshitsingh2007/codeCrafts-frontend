import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { templateStore } from '../../../store/data/Templatedata';
import { motion, AnimatePresence } from 'framer-motion'; // Import for animations

export default function AdminPane() {
  const [visible, setVisible] = useState(false);
  const [template, setTemplate] = useState({
    title: "",
    image: "",
    description: "",
    genre: "",
    Price:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplate((prev) => ({
      ...prev,
      [name]: value,}
    ));
  };

  const addTemplate = templateStore(state => state.addTemplate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!template.title || !template.image || !template.description || !template.genre) {
        alert("Please fill all fields");
        return;
      }
      await addTemplate(template);
      setTemplate({
        title: "",
        image: "",
        description: "",
        genre: "",
        Price:"",
      });
      setVisible(false);
      alert("Template added successfully");
    } catch (error) {
      console.log("Error adding template:", error);
      alert("Failed to add template. Please try again.");
    }
  };
  return (
    <div className="bg-black text-white px-[5%] min-h-screen">
      <div className='flex items-center justify-between py-10'>
        <div>
          <h1>Your collection</h1>
          <p className='text-[16px]'>View and manage all your websites in one place.</p>
        </div>
        <div className='flex gap-4'>
          <button
            className='bg-white text-black py-1 pr-1 pl-4 rounded-full flex items-center gap-1'
            onClick={() => setVisible(true)}
          >
            Create new Template
            <span className='bg-black py-2 px-2 rounded-full flex items-center justify-center'>
              <GoArrowUpRight className='text-white' size={25} />
            </span>
          </button>
          <button className='bg-white text-black py-1 pr-1 pl-4 rounded-full flex items-center gap-1'>
            Create Website
            <span className='bg-black py-2 px-2 rounded-full flex items-center justify-center'>
              <GoArrowUpRight className='text-white' size={25} />
            </span>
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='bg-gray-800 p-4 rounded-lg'>
          <h2 className='text-xl font-semibold'>Templates</h2>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg'>
          <h2 className='text-xl font-semibold'>Websites</h2>
        </div>
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className='text-xl font-bold'>Add Template</h2>
                <button
                  onClick={() => setVisible(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                  type="text"
                  name='title'
                  placeholder='Title'
                  onChange={handleChange}
                  value={template.title}
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type="text"
                  name='image'
                  placeholder='Image Link'
                  onChange={handleChange}
                  value={template.image}
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />
                <textarea
                type="text"
                name="description"
                 placeholder='Description'
                 onChange={handleChange}
                 value={template.description}
                 className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                <input
                  type="text"
                  name='genre'
                  placeholder='Category'
                  onChange={handleChange}
                  value={template.genre}
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type="number"
                  name='Price'
                  placeholder='Price'
                  onChange={handleChange}
                  value={template.Price}
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />

                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setVisible(false)}
                    className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button type='submit' className='px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition'>
                    Add Template
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}