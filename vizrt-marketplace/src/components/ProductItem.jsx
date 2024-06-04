import React from "react";
import { useNavigate } from "react-router-dom";

// Define the base URL for product images
const imageUrl = "http://localhost:5219/images";

// Define the ProductItem component
const ProductItem = ({ product }) => {
  // Initialize the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Function to handle viewing the details of the product
  const handleViewItem = () => {
    navigate(`/product/${product.productID}`);
  };

  // Render the component
  return (
    <div className="flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-8 w-full max-w-4xl mx-auto min-h-[300px]">
      {/* Image Section */}
      <div className="w-1/2 relative">
        <img
          className="object-cover w-full h-full"
          src={`${imageUrl}/${product.image}`}
          alt={`Picture of ${product.name}`}
        />
      </div>
      {/* Text Section */}
      <div className="w-1/2 p-8 flex flex-col justify-start">
        {/* Product name */}
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        {/* Product price */}
        <p className="text-xl font-semibold text-black-700 mb-4">
          ${product.price}
        </p>
        {/* Product description */}
        <p className="text-base text-black-600 mb-4">{product.description}</p>
        {/* Product category */}
        <p className="text-base font-semibold text-black-600 mb-4">
          {product.category}
        </p>
        <div className="flex-grow"></div>
        {/* View Item button */}
        <button
          onClick={handleViewItem}
          className="bg-black text-white py-2 px-4 rounded mt-auto"
        >
          View Item
        </button>
      </div>
    </div>
  );
};

// Export the component
export default ProductItem;
