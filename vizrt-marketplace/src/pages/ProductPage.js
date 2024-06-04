import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import ProductDetailsAndImage from "../components/ProductDetailsAndImage";
import TabsAndContent from "../components/TabsAndContent";

const imageUrl = "http://localhost:5219/images";

const ProductPage = () => {
  // Get the product ID from the URL params
  const { id } = useParams();

  // State to store the product data
  const [product, setProduct] = useState(null);

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("About");

  // Fetch product data based on the ID
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          // Fetch product data from ProductService
          const product = await ProductService.getProductById(id);
          // Set the fetched product to the product state
          setProduct(product);
        } catch (error) {
          console.error("Failed to fetch product", error);
        }
      } else {
        console.error("Product ID is undefined");
      }
    };
    fetchProduct();
  }, [id]);

  // Function to handle tab click event
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Render the component
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center px-4 sm:px-0">
      <div className="mt-8">
        {/* Render the ProductDetailsAndImage component */}
        <ProductDetailsAndImage imageUrl={imageUrl} product={product} />
      </div>
      <div className="w-full flex justify-center">
        {/* Render the TabsAndContent component */}
        <TabsAndContent
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductPage;
