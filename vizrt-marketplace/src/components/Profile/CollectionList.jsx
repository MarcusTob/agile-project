import React from "react";
import DownloadItem from "./DownloadItem";

// The CollectionList component receives a list of products
const CollectionList = ({ products }) => {
  return (
    <div className="flex justify-center min-h-screen w-full">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <DownloadItem key={product.productID} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <p className="text-white text-p font-customFont">
            Your collection is empty.
          </p>
        </div>
      )}
    </div>
  );
};

export default CollectionList;
