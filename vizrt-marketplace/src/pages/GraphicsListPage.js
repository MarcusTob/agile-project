import React, { useEffect, useState } from "react";
import FilterOptions from "../components/Browsing/FilterOptions";
import ProductList from "../components/Browsing/ProductList";
import ProductService from "../services/ProductService";

const GraphicsListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await ProductService.getAllProducts();
    setProducts(response);
    setFilteredProducts(response);
  };
  //fetches all products on page load
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex bg-brandBgLight min-h-screen">
      <div className="w-1/4 p-4">
        <FilterOptions products={products} setFilteredProducts={setFilteredProducts} />
      </div>
      <div className="w-3/4 p-4 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center min-h-full">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default GraphicsListPage;
