import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import CollectionList from "../components/CollectionList";
import MyNavbar from "../components/MyNavbar";

// MyCollectionPage component
const MyCollectionPage = () => {
  // State to store all products and filtered products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to fetch all products
  const getAllProducts = async () => {
    // Fetch products from ProductService
    const response = await ProductService.getAllProducts();
    // Set the fetched products to the products state
    setProducts(response);
    // Initialize filteredProducts with all products initially
    setFilteredProducts(response);
  };

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    getAllProducts();
  }, []);

  // Render MyCollectionPage component
  return (
    <div className="bg-brandBgLight min-h-screen">
      {/* Navbar component */}
      <MyNavbar />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full max-w screen-xl">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            My Collection
          </h2>
          {/* CollectionList component */}
          <CollectionList products={products} />
        </div>
      </div>
    </div>
  );
};

export default MyCollectionPage;
