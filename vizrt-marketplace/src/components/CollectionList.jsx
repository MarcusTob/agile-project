import React from "react";
import ProductItem from "./ProductItem";

const CollectionList = ({ products }) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        {products.map((product) => (
          <ProductItem key={product.ProductID} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
