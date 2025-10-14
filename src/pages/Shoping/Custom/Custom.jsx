import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { freeLancerStore } from '../../../store/Freelancer.js/FreeLancer';
import { FaRegComment, FaStar, FaSearch, FaFilter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Custom() {
  const { freelancers, fetchAllFreelancer } = freeLancerStore();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    fetchAllFreelancer();
  }, [fetchAllFreelancer]);

  useEffect(() => {
    let results = freelancers;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(freelancer =>
        freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        freelancer.skills.some(skill => 
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        freelancer.Location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by selected skills
    if (selectedSkills.length > 0) {
      results = results.filter(freelancer =>
        selectedSkills.every(skill => freelancer.skills.includes(skill))
      );
    }
    
    setFilteredFreelancers(results);
  }, [freelancers, searchTerm, selectedSkills]);

  const allSkills = [...new Set(freelancers.flatMap(f => f.skills))];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative text-center py-28 px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Find Your Expert
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover top-tier professionals ready to bring your vision to life with unparalleled expertise
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search by name, skills, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Filter */}
      <div className="px-4 sm:px-12 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <FaFilter className="text-blue-400 text-lg" />
            <h3 className="text-lg font-semibold text-gray-300">Filter by Skills:</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {allSkills.slice(0, 10).map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 font-medium ${
                  selectedSkills.includes(skill)
                    ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800/60 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {selectedSkills.length > 0 && (
            <button
              onClick={() => setSelectedSkills([])}
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-4 sm:px-12 mb-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400">
            Showing {filteredFreelancers.length} of {freelancers.length} experts
          </p>
        </div>
      </div>

      {/* Enhanced Freelancers Grid */}
      <div className="px-4 sm:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredFreelancers.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No experts found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredFreelancers.map((freelancer) => (
                <div
                  key={freelancer._id}
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
                >
                  {/* Header with Image and Basic Info */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="relative">
                        <img
                          src={freelancer.Image}
                          alt={freelancer.name}
                          className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        />
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 shadow"></span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-white truncate group-hover:text-blue-300 transition-colors">
                        {freelancer.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CiLocationOn className="text-blue-400 flex-shrink-0" size={16} />
                        <span className="text-gray-400 text-sm truncate">{freelancer.Location}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={12}
                            className={star <= 4 ? "text-yellow-400" : "text-gray-600"}
                          />
                        ))}
                        <span className="text-gray-400 text-sm ml-1">(4.0)</span>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.Language.slice(0, 3).map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/30"
                      >
                        {lang}
                      </span>
                    ))}
                    {freelancer.Language.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded-lg text-xs">
                        +{freelancer.Language.length - 3}
                      </span>
                    )}
                  </div>

                  {/* About Section */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {freelancer.about}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {freelancer.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-gray-700/50 text-gray-300 text-xs font-medium border border-gray-600 transition-colors group-hover:border-blue-400/50"
                      >
                        {skill}
                      </span>
                    ))}
                    {freelancer.skills.length > 4 && (
                      <span className="px-3 py-1.5 rounded-full bg-gray-800 text-gray-400 text-xs">
                        +{freelancer.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer with CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaRegComment size={14} />
                      <span>Available for projects</span>
                    </div>
                    <button
                      onClick={() => navigate(`/custom-more/${freelancer._id}`)}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}