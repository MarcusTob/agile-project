import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Header from "../components/Profile/Header";
import Listing from "../components/Profile/Listing";
import MyNavbar from "../components/Profile/MyNavbar";

const imageUrl = "http://localhost:5219/images";

const MyListings = () => {
  // State variables for products, filtered products, loading state, and error handling
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetches products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAllProducts();
        const username = localStorage.getItem("username");
        const editableProducts = data.filter(
          product => product.creator === username
        );
        // Set products and initialize filteredProducts with all products
        setProducts(editableProducts);
        setFilteredProducts(editableProducts);
      } catch (err) {
        setError(err.message); //error message if fetching fails
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Render loading state while fetching data
  if (loading) return <p>Loading...</p>;
  // Render error message if fetching data fails
  if (error) return <p>Error: {error}</p>;

  // Render MyListings component
  return (
    <div className="bg-brandBgLight min-h-screen">
      {/* Navbar component */}
      <MyNavbar />
      <div className="flex flex-col items-center w-full mt-8">
        <div className="w-full px-8">
          {/* Header component */}
          <Header
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <div className="mt-20">
            {/* Listing components */}
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Listing
                  key={product.id || index}
                  product={product}
                  imageUrl={imageUrl}
                />
              ))
            ) : (
               <p className="flex flex-col items-center text-white text-p font-customFont">No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
