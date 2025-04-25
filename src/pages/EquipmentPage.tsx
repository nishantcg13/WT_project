import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import CategoryFilter from '../components/CategoryFilter';
import ProductGallery from '../components/ProductGallery';
import { Sliders } from 'lucide-react';

const EquipmentPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('All');
    }
  }, [searchParams]);

  useEffect(() => {
    // Filter products by category
    let result = products;

    if (activeCategory !== 'All') {
      result = products.filter(product => product.category === activeCategory);
    }

    // Sort products
    if (sortOption === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [activeCategory, sortOption]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setActiveCategory(category);
  };

  return (
    <div className="bg-white">
      <div className="relative pt-16 bg-blue-100 mb-8">
        <img
          src="/src/assets/images/hero-equipment.jpg" // Use the imported image
          alt="Trophies and Sports Equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Sports Equipment
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Browse our collection of high-quality sports equipment designed for athletes of all levels.
            From beginners to professionals, find the gear that will elevate your performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter button */}
          <button
            className="lg:hidden flex items-center justify-center py-3 px-4 bg-gray-100 rounded-md mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Sliders className="h-5 w-5 mr-2" />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>

          {/* Sidebar */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sort By</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="sort-rating"
                    name="sort-option"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    checked={sortOption === 'rating'}
                    onChange={() => setSortOption('rating')}
                  />
                  <label htmlFor="sort-rating" className="ml-3 text-sm text-gray-700">
                    Highest Rated
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-price-low"
                    name="sort-option"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    checked={sortOption === 'price-low'}
                    onChange={() => setSortOption('price-low')}
                  />
                  <label htmlFor="sort-price-low" className="ml-3 text-sm text-gray-700">
                    Price: Low to High
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-price-high"
                    name="sort-option"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    checked={sortOption === 'price-high'}
                    onChange={() => setSortOption('price-high')}
                  />
                  <label htmlFor="sort-price-high" className="ml-3 text-sm text-gray-700">
                    Price: High to Low
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} results
              </p>
              <div className="hidden sm:block">
                <select
                  className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Sort by</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            <ProductGallery products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPage;