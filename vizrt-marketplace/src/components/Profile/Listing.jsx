import React from "react";
import ProductService from "../../services/ProductService";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Listing = ({ product, imageUrl }) => {
  //navigation to the product the user wants to edit
  const navigate = useNavigate();
  const handleViewItem = () => {
    navigate(`/editListing/${product.productID}`);
  };

  const handleDeleteProduct = async () => {
    try {
      //delete the product
      await ProductService.deleteProduct(product.productID);
      //refresh page to remove deleted item from view
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

return (
  // Main container
  <div className="relative w-full h-auto bg-white mt-10 p-4 rounded-lg shadow-md">
    {/* Edit icon with a link to the edit page or delete the product */}
    <FiTrash2 
    className="text-brandRed text-2xl cursor-pointer right-2 top-4 absolute"
    onClick={handleDeleteProduct}
    />
      <FiEdit2 
      className="text-black text-2xl cursor-pointer right-10 top-4 absolute"
      onClick={handleViewItem}
      />
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
        {/* Product price */}
        <div className="flex mt-4 flex-wrap">
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
