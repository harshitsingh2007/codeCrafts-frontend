import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { templateStore } from '../../../store/data/Templatedata';
import { motion, AnimatePresence } from 'framer-motion';
import { freeLancerStore } from '../../../store/Freelancer.js/FreeLancer'
import { userAuthStore } from '../../../store/auth/auth';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../store/Cart/Cart';

export default function AdminPane() {
  const user = userAuthStore((state) => state.user);
  const Navigate=useNavigate();
  const {fetchTemplate, addTemplate,OwnerTemplate,getOwnerTemplate,removeOwnerTemplate} = templateStore();
  const { getMyEarning,totalEarning } = useCartStore()
  const {createFreelancer } = freeLancerStore();
  const [templateModalVisible, setTemplateModalVisible] = useState(false);
  const [freelancerModalVisible, setFreelancerModalVisible] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const logout = userAuthStore((state) => state.logout);

 useEffect(() => {
    getMyEarning();
  }, []);

const handledeleteTemplate = async (templateId) => {
  if (!window.confirm("Are you sure you want to delete this template?")) return;

  try {
    const res = await removeOwnerTemplate(templateId);

    if (res?.success) {
      alert("Template deleted successfully");
    } else {
      alert(`Failed to delete template: ${res?.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error deleting template:", error);
    alert("An error occurred while deleting the template.");
  }
};

 
  const handleLogout=async()=>{
    try {
      await logout();
       console.log("Logged out successfully");
        Navigate('/login');
    } catch (error) {
      console.log(error.message, "logout error");
    }
  }

  const [template, setTemplate] = useState({
    title: "",
    image: "",
    description: "",
    genre: "",
    Price: "",
    imageUrl: "" 
  });

  const [freelancer, setFreelancer] = useState({
    name: "",
    email: "",
    skills: [],
    about: "",
    PhoneNo: "",
    Location: "",
    Language: [],
    role: "",
    Image: "",
    imageUrl: ""
  });

  const [skillInput, setSkillInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");

  useEffect(() => {
    fetchTemplate();
  },[fetchTemplate]);

  useEffect(()=>{
    getOwnerTemplate();
  },[getOwnerTemplate]);
  
  const uploadToCloudinary = async (file, type = 'template') => {
    setUploading(true);
    setUploadProgress(0);
    
    const cloudName = "ddlff0xoe";
    const uploadPreset = "react_upload";
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', type === 'template' ? 'templates' : 'freelancers');

    try {
      const xhr = new XMLHttpRequest();
      
      return new Promise((resolve, reject) => {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            setUploadProgress(Math.round(percentComplete));
          }
        });

        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            setUploading(false);
            setUploadProgress(0);
            resolve(response.secure_url);
          } else {
            setUploading(false);
            setUploadProgress(0);
            reject(new Error('Upload failed'));
          }
        });

        xhr.addEventListener('error', () => {
          setUploading(false);
          setUploadProgress(0);
          reject(new Error('Upload failed'));
        });

        xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);
        xhr.send(formData);
      });
    } catch (error) {
      setUploading(false);
      setUploadProgress(0);
      throw error;
    }
  };

  const handleTemplateChange = async (e) => {
    const { name, files, value } = e.target;
    
    if (name === 'image' && files && files[0]) {
      try {
        const imageUrl = await uploadToCloudinary(files[0], 'template');
        setTemplate(prev => ({
          ...prev,
          imageUrl: imageUrl
        }));
      } catch (error) {
        alert('Failed to upload image. Please try again.');
        console.error('Upload error:', error);
      }
    } else {
      setTemplate(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleTemplateSubmit = async (e) => {
    e.preventDefault();
    
    if (!template.imageUrl) {
      alert("Please upload an image first");
      return;
    }

    try {
      const templateData = {
        title: template.title,
        description: template.description,
        genre: template.genre,
        Price: template.Price,
        image: template.imageUrl 
      };

      const res = await addTemplate(templateData);
      if (res && res.message) {
        alert("Template added successfully");
        setTemplateModalVisible(false);
        setTemplate({
          title: "",
          image: "",
          description: "",
          genre: "",
          Price: "",
          imageUrl: ""
        });
      } else {
        alert("Failed to add template. Please try again.");
      }
    } catch (error) {
      console.log("Error adding template:", error);
      alert("Failed to add template. Please try again.");
    }
  };


  const addSkill = () => {
    if (skillInput.trim() && !freelancer.skills.includes(skillInput.trim())) {
      setFreelancer(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput("");
    }
  };

  
  const removeSkill = (skillToRemove) => {
    setFreelancer(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  
  const addLanguage = () => {
    if (languageInput.trim() && !freelancer.Language.includes(languageInput.trim())) {
      setFreelancer(prev => ({
        ...prev,
        Language: [...prev.Language, languageInput.trim()]
      }));
      setLanguageInput("");
    }
  };

  const removeLanguage = (languageToRemove) => {
    setFreelancer(prev => ({
      ...prev,
      Language: prev.Language.filter(language => language !== languageToRemove)
    }));
  };

  const handleFreelancerChange = async (e) => {
    const { name, files, value } = e.target;
    
    if (name === 'Image' && files && files[0]) {
      try {
        const imageUrl = await uploadToCloudinary(files[0], 'freelancer');
        setFreelancer(prev => ({
          ...prev,
          imageUrl: imageUrl
        }));
      } catch (error) {
        alert('Failed to upload image. Please try again.');
        console.error('Upload error:', error);
      }
    } else {
      setFreelancer(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFreelancerSubmit = async (e) => {
    e.preventDefault();

    if (!freelancer.imageUrl) {
      alert("Please upload a profile image first");
      return;
    }

    if (freelancer.skills.length === 0) {
      alert("Please add at least one skill");
      return;
    }

    if (freelancer.Language.length === 0) {
      alert("Please add at least one language");
      return;
    }

    try {
      const freelancerData = {
        name: freelancer.name,
        email: freelancer.email,
        skills: freelancer.skills,
        about: freelancer.about,
        phoneNo: freelancer.PhoneNo,
        Location: freelancer.Location,
        Language: freelancer.Language,
        role: freelancer.role,
        Image: freelancer.imageUrl 
      };

      const res = await createFreelancer(freelancerData);
      if (res && res.success) {
        alert("Freelancer profile created successfully");
        setFreelancerModalVisible(false);
        // Reset form
        setFreelancer({
          name: "",
          email: "",
          skills: [],
          about: "",
          PhoneNo: "",
          Location: "",
          Language: [],
          role: "",
          Image: "",
          imageUrl: ""
        });
        setSkillInput("");
        setLanguageInput("");
      } else {
        alert(res?.message || "Failed to create freelancer profile");
      }
    } catch (error) {
      console.log("Error creating freelancer profile:", error);
      alert("Failed to create freelancer profile. Please try again.");
    }
  };

  const handleKeyPress = (e, type) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (type === 'skill') {
        addSkill();
      } else if (type === 'language') {
        addLanguage();
      }
    }
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-12 min-h-screen pt-20">
      <div className='flex flex-col md:flex-row items-center justify-between py-8 md:py-10 gap-4'>
        <div>
          <h1 className='text-xl md:text-2xl font-bold'>Your collection</h1>
          <p className='text-sm md:text-base text-gray-400'>View and manage all your websites in one place.</p>
        </div>
        <div className='flex flex-wrap gap-2 md:gap-4 justify-center'>
  <button
    className='bg-white text-black py-2 pr-2 pl-4 rounded-full flex items-center gap-1 text-sm md:text-base'
    onClick={() => setTemplateModalVisible(true)}
  >
    Create new Template
    <span className='bg-black p-2 rounded-full flex items-center justify-center'>
      <GoArrowUpRight className='text-white' size={20} />
    </span>
  </button>    

{/* Show "Become Freelancer" only if user is not a freelancer */}
  {!user?.isFreelancer && (
    <button
      className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 pr-2 pl-4 rounded-full flex items-center gap-2 shadow-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200 text-sm md:text-base font-semibold"
      onClick={() => setFreelancerModalVisible(true)}
    >
      <span>Become Freelancer</span>
      <span className="bg-black p-2 rounded-full flex items-center justify-center shadow">
        <GoArrowUpRight className="text-white" size={20} />
      </span>
    </button>
  )}
  </div>
  </div>
  <div className="flex flex-col md:flex-row gap-6 mb-8">
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl flex-1 flex flex-col items-center shadow-lg">
      <h1 className="text-lg md:text-xl font-semibold mb-2">Total Earning</h1>
      <p className="text-3xl font-bold text-green-400">${totalEarning}</p>
    </div>
  </div>
  <div className='flex flex-col gap-6 mb-8'>
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg'>
      <h2 className='text-lg md:text-xl font-semibold mb-4'>Your Templates</h2>
      <div>
        {OwnerTemplate.length === 0 ? (
          <p className='text-gray-400 mt-2'>No templates found. Click "Create new Template" to add one.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
            {OwnerTemplate.map((temp) => (
              <div key={temp._id} className='bg-gray-700 p-4 rounded-lg flex flex-col shadow hover:shadow-xl transition-shadow duration-200'>
                <img src={temp.image} alt={temp.title} className='w-full h-32 object-cover rounded-md mb-3 border border-gray-600' />
                <h3 className='text-md font-semibold mb-1'>{temp.title}</h3>
                <p className='text-sm text-gray-300 mb-1 line-clamp-2'>{temp.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className='text-xs text-gray-400'>Category: <span className="font-medium">{temp.genre}</span></span>
                  <span className='text-xs text-gray-400'>Price: <span className="font-medium text-green-400">${temp.Price}</span></span>
                </div>
                <button
                  className='bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded mt-3 transition'
                  onClick={() => handledeleteTemplate(temp._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg'>
      <h2 className='text-lg md:text-xl font-semibold mb-2'>Your Booking</h2>
      <div className="text-gray-400">No bookings yet.</div>
    </div>
  </div>
      <AnimatePresence>
        {templateModalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setTemplateModalVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className='text-xl font-bold'>Add Template</h2>
                <button
                  onClick={() => setTemplateModalVisible(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleTemplateSubmit} className='flex flex-col gap-4'>
                <input
                  type="text"
                  name='title'
                  placeholder='Title'
                  onChange={handleTemplateChange}
                  value={template.title}
                  required
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Template Image *</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleTemplateChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {uploading && (
                    <div className="w-full bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                      <p className="text-xs text-gray-400 mt-1">Uploading: {uploadProgress}%</p>
                    </div>
                  )}
                  {template.imageUrl && !uploading && (
                    <p className="text-green-400 text-sm">✓ Image uploaded successfully</p>
                  )}
                </div>

                <textarea
                  name="description"
                  placeholder='Description'
                  onChange={handleTemplateChange}
                  value={template.description}
                  required
                  rows="3"
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
                <input
                  type="text"
                  name='genre'
                  placeholder='Category'
                  onChange={handleTemplateChange}
                  value={template.genre}
                  required
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type="number"
                  name='Price'
                  placeholder='Price'
                  onChange={handleTemplateChange}
                  value={template.Price}
                  required
                  className='py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />

                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setTemplateModalVisible(false)}
                    className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type='submit' 
                    className='px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition disabled:bg-gray-600 disabled:cursor-not-allowed'
                    disabled={uploading || !template.imageUrl}
                  >
                    {uploading ? 'Uploading...' : 'Add Template'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Freelancer Modal */}
      <AnimatePresence>
        {freelancerModalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setFreelancerModalVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {
                
                <div className="flex justify-between items-center mb-6">
                <h2 className='text-xl md:text-2xl font-bold'>Become a Freelancer</h2>
                <button
                  onClick={() => setFreelancerModalVisible(false)}
                  className="text-gray-400 hover:text-white text-xl"
                  >
                  ✕
                </button>
              </div>
              }

              <form onSubmit={handleFreelancerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={freelancer.name}
                    onChange={handleFreelancerChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={freelancer.email}
                    onChange={handleFreelancerChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Profile Image *</label>
                  <input
                    type='file'
                    name="Image"
                    accept='image/*'
                    onChange={handleFreelancerChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {uploading && (
                    <div className="w-full bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                      <p className="text-xs text-gray-400 mt-1">Uploading: {uploadProgress}%</p>
                    </div>
                  )}
                  {freelancer.imageUrl && !uploading && (
                    <p className="text-green-400 text-sm">✓ Image uploaded successfully</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Phone Number *</label>
                  <input
                    type="tel"
                    name="PhoneNo"
                    value={freelancer.PhoneNo}
                    onChange={handleFreelancerChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Your Role *</label>
                  <input
                    type="text"
                    name="role"
                    value={freelancer.role}
                    onChange={handleFreelancerChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Frontend Developer, Graphic Designer, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Location *</label>
                  <input
                    type="text"
                    name="Location"
                    value={freelancer.Location}
                    onChange={handleFreelancerChange}
                    required
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City, Country"
                  />
                </div>

                {/* Skills input with tags */}
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Skills *</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {freelancer.skills.map((skill, index) => (
                      <div key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-sm hover:text-red-300"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, 'skill')}
                      className="flex-1 py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add a skill and press Enter or click Add"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Languages input with tags */}
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Languages *</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {freelancer.Language.map((language, index) => (
                      <div key={index} className="bg-green-600 text-white px-3 py-1 rounded-full flex items-center">
                        {language}
                        <button
                          type="button"
                          onClick={() => removeLanguage(language)}
                          className="ml-2 text-sm hover:text-red-300"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={languageInput}
                      onChange={(e) => setLanguageInput(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, 'language')}
                      className="flex-1 py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add a language and press Enter or click Add"
                    />
                    <button
                      type="button"
                      onClick={addLanguage}
                      className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-300">About Yourself *</label>
                  <textarea
                    name="about"
                    value={freelancer.about}
                    onChange={handleFreelancerChange}
                    required
                    rows="4"
                    className="w-full py-2 px-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your experience, expertise, and what makes you unique..."
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => setFreelancerModalVisible(false)}
                    className="px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition font-medium disabled:bg-gray-600 disabled:cursor-not-allowed"
                    disabled={uploading || !freelancer.imageUrl}
                  >
                    {uploading ? 'Uploading...' : 'Create Profile'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div>
        <button className='bg-red-600 rounded px-4 py-2' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}