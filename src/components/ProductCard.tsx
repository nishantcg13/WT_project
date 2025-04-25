import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => (e.currentTarget.src = '/src/assets/images/fallback-image.jpeg')} // Fallback for broken images
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;