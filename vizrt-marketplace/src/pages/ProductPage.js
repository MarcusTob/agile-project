import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import ProductDetailsAndImage from "../components/ProductDetailsAndImage";
import TabsAndContent from "../components/TabsAndContent";

const imageUrl = "http://localhost:5219/images";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const product = await ProductService.getProductById(id);
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center px-4 sm:px-0">
      <div className="mt-8">
        {" "}
        {/* Adjusted margin here */}
        <ProductDetailsAndImage imageUrl={imageUrl} product={product} />
      </div>
      <div className="w-full flex justify-center">
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
