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
    console.log(product.colors)
  };

  // Render the component
  return (
    <div className="flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-8 w-full max-w-4xl mx-auto min-h-[300px]">
      {/* Image Section */}
      <div className="w-1/2 relative">
        <img
          className="object-scale-down w-full h-full"
          src={`${imageUrl}/${product.image}`}
          alt={`Picture of ${product.name}`}
        />
      </div>
      {/* Text Section */}
      <div className="w-1/2 p-8 flex flex-col justify-start">
        {/* Product name */}
        <h3 className="text-h3 font-bold font-customFont mb-2">{product.name}</h3>
        {/* Product price */}
        <p className="text-p font-semibold font-customFont text-black mb-4">
          ${product.price}
        </p>
        {/* Product description */}
        <p className="text-p3 font-customFont text-black mb-4">{product.description}</p>
        {/* Product category */}
        <p className="text-p3 font-semibold text-black mb-4">
          {product.category}
        </p>
        {/* fetched as an array of strings, need to split the colors on the comma. */}
        <div className="flex space-x-2  mb-4">
          {product.colors[0].split(',').map((color, i)=> (
            <div
              key={i}
              style={{ backgroundColor: color, width: "20px", height: "20px", borderRadius: "50%"}}
              ></div>
          ))}
        </div>
        <div className="flex-grow"></div>
        {/* View Item button */}
        <button
          onClick={handleViewItem}
          className="bg-black text-p3 font-customFont text-white py-2 rounded mt-auto"
        >
          View Item
        </button>
      </div>
    </div>
  );
};

// Export the component
export default ProductItem;
