import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Star } from 'lucide-react'; // Ensure this is the correct import for the Star icon

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, image, category, price, rating, featured } = product; // Destructure product properties
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div
      onClick={handleViewDetails} // Add onClick to the card
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white cursor-pointer"
    >
      <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-blue-600 font-medium mb-1 block">{category}</span>
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-gray-900">₹{price.toFixed(2)}</p>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        <Link
          to={`/product/${id}`}
          className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;