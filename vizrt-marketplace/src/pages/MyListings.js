import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Header from "../components/Header";
import Listing from "../components/Listing";
import MyNavbar from "../components/MyNavbar";

const imageUrl = "http://localhost:5219/images"; // Adjust this URL to match your backend configuration

const MyListings = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAllProducts();
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-brandBgLight min-h-screen">
      <MyNavbar />
      <div className="flex flex-col items-center w-full mt-8">
        <div className="w-[1512px] min-h-screen p-8">
          <Header
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <div className="mt-20">
            {" "}
            {/* Adjusted margin-top to place listings below the header */}
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
