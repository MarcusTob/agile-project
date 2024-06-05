import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Header from "../components/Header";
import Listing from "../components/Listing";
import MyNavbar from "../components/MyNavbar";

// URL to match your backend configuration
const imageUrl = "http://localhost:5219/images";

const MyListings = () => {
  // State variables for products, filtered products, loading state, and error handling
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAllProducts();
        // Set products and initialize filteredProducts with all products
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
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
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
