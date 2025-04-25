import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { Star, ArrowLeft } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || '0', 10));
  
  // Simulate multiple product images for demo
  const productImages = [
    product?.image,
    'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const reviewCount = 42;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/equipment"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Equipment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            to="/equipment"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Equipment
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex gap-4 overflow-auto pb-2">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-none h-24 w-24 overflow-hidden rounded-md ring-1 ring-gray-200"
                >
                  <img
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{product.rating} ({reviewCount} reviews)</span>
                </div>
                <span className="text-sm text-gray-600">Category: {product.category}</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Specifications</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;