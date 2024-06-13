import React from "react";
import { useNavigate } from "react-router-dom";

const imageUrl = "http://localhost:5219/images";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  // Function to handle viewing the details of the product
  const handleViewItem = () => {
    navigate(`/product/${product.productID}`);
  };

  // Render the component
  return (
    <div className="bg-brandOrange rounded-lg shadow-lg overflow-hidden my-4 w-full max-w-sm mx-auto flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img
          className="object-cover w-full h-full"
          src={`${imageUrl}/${product.image}`}
          alt={`Picture of ${product.name}`}
        />
      </div>
      {/* Text Section */}
      <div className="p-4 flex flex-col justify-start flex-grow">
        {/* Product name */}
        <h3 className="text-h3 font-bold font-customFont mb-2">{product.name}</h3>
        {/* Product price */}
        <p className="text-p font-semibold font-customFont text-black mb-2">
          ${product.price}
        </p>
        {/* Product description */}
        <p className="text-p3 font-customFont text-black mb-2 flex-grow">{product.description}</p>
        {/* Product category */}
        <p className="text-p3 font-semibold text-black mb-2">
          {product.category}
        </p>
        {/* Product colors */}
        <div className="flex space-x-2 mb-4">
          {product.colors[0].split(',').map((color, i) => (
            <div
              key={i}
              style={{ backgroundColor: color, width: "20px", height: "20px", borderRadius: "50%" }}
            ></div>
          ))}
        </div>
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

export default ProductItem;
