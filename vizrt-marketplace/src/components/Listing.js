import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Listing = ({ product, imageUrl }) => (
  <div className="relative w-full h-auto bg-white mt-10 p-4 rounded-lg shadow-md">
    <Link to={`/edit`} className="absolute top-2 right-2">
      <FiEdit2 className="text-black text-2xl cursor-pointer" />
    </Link>
    <div className="flex flex-col sm:flex-row">
      <img
        className="w-full sm:w-[232px] h-[143px] object-cover rounded"
        alt={product.name}
        src={`${imageUrl}/${product.productImage}`}
      />
      <div className="ml-4 mt-4 sm:mt-0">
        <div className="font-semibold text-[#000000] text-[24px] leading-[normal]">
          {product.name}
        </div>
        <p className="text-[#000000] text-base leading-[24px] mt-2">
          {product.description}
        </p>
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
