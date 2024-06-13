import React from "react";
import DownloadItem from "./DownloadItem";

// The CollectionList component receives a list of products
const CollectionList = ({ products }) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2 xl:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <DownloadItem key={product.productID} product={product} />
          ))
        ) : (
          <p className="text-gray-600 text-p font-customFont">
            Your collection is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default CollectionList;
