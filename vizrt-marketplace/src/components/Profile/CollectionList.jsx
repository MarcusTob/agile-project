import React from "react";
import DownloadItem from "./DownloadItem";

// The CollectionList component receives a list of products as a prop
const CollectionList = ({ products }) => {
  return (
    // Main container div
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        {/* Mapping through the products array to render each DownloadItem component */}
        {products.map((product) => (
          // Key is set to product.ProductID to ensure unique identification for each element
          <DownloadItem key={product.ProductID} product={product} /> 
        ))}
      </div>
    </div>
  );
};

export default CollectionList;