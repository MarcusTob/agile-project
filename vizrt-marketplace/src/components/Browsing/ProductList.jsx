import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="flex justify-center items-start min-h-screen w-full p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {products.map((product) => (
          <ProductItem key={product.ProductID} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
