import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { userAuthStore } from '../store/auth/auth.js'; 
import { templateStore } from '../store/data/Templatedata.js';

export default function Account() {
  const Navigate = useNavigate();
  const { user } = userAuthStore();
  const { getSavedTemplate, deleteSavedTemplate, savedTemplates } = templateStore();
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null); 
  const [localTemplates, setLocalTemplates] = useState([]);

  const logout = userAuthStore((state) => state.logout);

  // Fetch saved templates on mount
  useEffect(() => {
    const fetchData = async () => {
      await getSavedTemplate();
    };
    fetchData();
  }, [getSavedTemplate]);

  // Sync localTemplates with store
  useEffect(() => {
    setLocalTemplates(savedTemplates || []);
  }, [savedTemplates]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout(); 
      toast.success("Logged out successfully");
      Navigate('/login');
    } catch (error) {
      console.log(error.message, "logout error");
      toast.error("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteTemplate = async (templateId) => {
    setDeletingId(templateId); // Set the template being deleted
    try {
      const res = await deleteSavedTemplate(templateId);
      if (res.success) {
        toast.success("Template deleted successfully");
        // Remove deleted template from local state immediately
        setLocalTemplates(prev => prev.filter(t => t._id !== templateId));
      } else {
        toast.error(res.message || "Failed to delete template");
      }
    } catch (error) {
      console.log("error in deleting template", error);
      toast.error("Error deleting template");
    } finally {
      setDeletingId(null); // Reset deleting state
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 mt-4">
            <div className="rounded-2xl p-8 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome back, {user && user.name}!
              </h1>
            </div>
          </div>

          {/* Saved Templates Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Your Saved Templates</h2>
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold">
                {localTemplates?.length || 0} {localTemplates?.length === 1 ? 'template' : 'templates'}
              </span>
            </div>

            {!localTemplates || localTemplates.length === 0 ? (
              <div className="text-center py-16 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700">
                <div className="text-gray-400 text-6xl mb-4">📁</div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">No templates yet</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Start creating amazing websites and your saved templates will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {localTemplates.map((template) => (
                  <div
                    key={template._id} 
                    className={`group cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl ${
                      deletingId === template._id 
                        ? 'border-yellow-500 opacity-60' 
                        : 'border-gray-700 hover:border-purple-500'
                    }`}
                  >
                    <div className="relative overflow-hidden"
                    onClick={() => Navigate(`/shop-more/${template._id}`)}>
                      <img 
                        src={template.image} 
                        alt={template.title} 
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {deletingId === template._id && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-bold text-white text-lg mb-2 line-clamp-1">{template.title}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          {template.genre}
                        </span>
                        <span className="text-green-400 font-bold text-lg">${template.Price}</span>
                      </div>
                      
                      <button 
                        onClick={() => handleDeleteTemplate(template._id)}
                        disabled={deletingId === template._id}
                        className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 py-2 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-red-500/30 hover:border-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {deletingId === template._id ? 'Deleting...' : 'Delete Template'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logout Section */}
          <div className="text-center border-t border-gray-700 pt-14">
            <button 
              onClick={handleLogout} 
              disabled={loading}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2 mx-auto shadow-lg hover:shadow-red-500/25"
            >
              {loading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
