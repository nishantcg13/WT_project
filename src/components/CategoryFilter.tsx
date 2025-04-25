import React from 'react';
import { categories } from '../data/products';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;