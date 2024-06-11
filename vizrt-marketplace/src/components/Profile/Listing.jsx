import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Listing component accepts product and imageUrl as props
const Listing = ({ product, imageUrl }) => {
  const navigate = useNavigate();
  const handleViewItem = () => {
    navigate(`/editListing/${product.productID}`);
  };

return (
  // Main container with styling
  <div className="relative w-full h-auto bg-white mt-10 p-4 rounded-lg shadow-md">
    {/* Edit icon with a link to the edit page */}
      <FiEdit2 
      className="text-black text-2xl cursor-pointer"
      onClick={handleViewItem}
      />
    {/* Flex container for product image and details */}
    <div className="flex flex-col sm:flex-row">
      {/* Product image */}
      <img
        className="w-full sm:w-[232px] h-[143px] object-cover rounded"
        alt={product.name}
        src={`${imageUrl}/${product.image}`}
      />
      {/* Product details container */}
      <div className="flex flex-col ml-4 mt-4 sm:mt-0">
        {/* Product name */}
        <div className="font-semibold text-h3 font-customFont leading-[normal]">
          {product.name}
        </div>
        {/* Product description */}
        <p className="text-p font-customFont leading-[24px] mt-2">
          {product.description}
        </p>
        {/* Product size and price */}
        <div className="flex mt-4 flex-wrap">
          <div className="font-semibold text-p font-customFont leading-[normal] mr-4 mb-2">
            Size: {product.size}
          </div>
          <div className="font-semibold text-p font-customFont leading-[normal]">
            Price: ${product.price}
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
export default Listing;
