import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Selling Equipment</h2>
            <p className="text-gray-600 max-w-2xl">
              Our most popular items chosen by athletes around the world. Quality gear that delivers exceptional performance.
            </p>
          </div>
          <Link 
            to="/equipment" 
            className="hidden md:flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View All
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/equipment" 
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition-colors font-medium"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;