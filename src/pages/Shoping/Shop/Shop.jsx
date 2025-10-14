import React, { useEffect, useState } from 'react';
import { templateStore } from '../../../store/data/Templatedata';
import { NavLink } from 'react-router-dom';
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function Shop() {
  const { templates, fetchTemplate, isloading } = templateStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);

  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  const categories = ['All', ...new Set(templates.map((t) => t.genre))];

  // Step 1️⃣: Filter by Category
  let filteredTemplates =
    selectedCategory === 'All'
      ? [...templates]
      : templates.filter((t) => t.genre === selectedCategory);

  // Step 2️⃣: Sort by Selected Option
  if (sortOption === 'priceLowHigh') {
    filteredTemplates.sort((a, b) => a.Price - b.Price);
  } else if (sortOption === 'priceHighLow') {
    filteredTemplates.sort((a, b) => b.Price - a.Price);
  } else if (sortOption === 'az') {
    filteredTemplates.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === 'za') {
    filteredTemplates.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="pt-28 bg-black text-white px-6 sm:px-12 min-h-screen">
      {/* Filter Section */}
      <div className="flex flex-wrap justify-between items-center mb-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
                selectedCategory === category
                  ? 'bg-white text-black font-semibold'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort Button */}
        <div className="relative mt-4 sm:mt-0">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition"
          >
            <TbAdjustmentsHorizontal className="text-xl" />
            <span className="text-sm">Sort</span>
          </button>

          {isSortOpen && (
            <div className="absolute right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-48 z-10">
              <button
                onClick={() => { setSortOption('priceLowHigh'); setIsSortOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Price: Low → High
              </button>
              <button
                onClick={() => { setSortOption('priceHighLow'); setIsSortOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Price: High → Low
              </button>
              <button
                onClick={() => { setSortOption('az'); setIsSortOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                A → Z
              </button>
              <button
                onClick={() => { setSortOption('za'); setIsSortOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Z → A
              </button>
              <button
                onClick={() => { setSortOption(''); setIsSortOpen(false); }}
                className="block w-full text-left px-4 py-2 text-gray-400 hover:bg-gray-700"
              >
                Reset Sort
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Template Grid */}
      {isloading ? (
        <p className="text-center text-gray-400">Loading templates...</p>
      ) : (
        <div className="grid grid-cols-1 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <NavLink
                to={`/shop-more/${template._id}`}
                key={template._id}
                className="relative group cursor-pointer"
              >
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-[250px] object-cover rounded-xl border border-gray-700 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-lg text-sm">
                  ${template.Price}
                </div>
              </NavLink>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No templates found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
