import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

// Listing component accepts product and imageUrl as props
const Listing = ({ product, imageUrl }) => (
  // Main container with styling
  <div className="relative w-full h-auto bg-white mt-10 p-4 rounded-lg shadow-md">
    {/* Edit icon with a link to the edit page */}
    <Link to={`/edit`} className="absolute top-2 right-2">
      <FiEdit2 className="text-black text-2xl cursor-pointer" />
    </Link>
    {/* Flex container for product image and details */}
    <div className="flex flex-col sm:flex-row">
      {/* Product image */}
      <img
        className="w-full sm:w-[232px] h-[143px] object-cover rounded"
        alt={product.name}
        src={`${imageUrl}/${product.productImage}`}
      />
      {/* Product details container */}
      <div className="ml-4 mt-4 sm:mt-0">
        {/* Product name */}
        <div className="font-semibold text-[#000000] text-[24px] leading-[normal]">
          {product.name}
        </div>
        {/* Product description */}
        <p className="text-[#000000] text-base leading-[24px] mt-2">
          {product.description}
        </p>
        {/* Product size and price */}
        <div className="flex flex-col sm:flex-row mt-4">
          <div className="font-semibold text-[#000000] text-[18px] leading-[normal]">
            Size: {product.size}
          </div>
          <div className="ml-0 sm:ml-8 mt-2 sm:mt-0 font-semibold text-[#000000] text-[18px] leading-[normal]">
            Price: ${product.price}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Listing;
