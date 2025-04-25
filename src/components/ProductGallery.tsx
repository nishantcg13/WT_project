import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface ProductGalleryProps {
  products: Product[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGallery;