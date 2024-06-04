import React from "react";
import ProductItem from "./ProductItem";

// Define the ProductList component
const ProductList = ({ products }) => {
  // Render the component
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        {/* Map over each product and render a ProductItem component */}
        {products.map((product) => (
          <ProductItem key={product.ProductID} product={product} />
        ))}
      </div>
    </div>
  );
};

// Export the component
export default ProductList;
