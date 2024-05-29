import React, { useEffect, useState } from 'react';
import FilterOptions from '../components/FilterOptions';
import ProductList from '../components/ProductList';
import ProductService from '../services/ProductService';

const GraphicsListPage = () => {
    // State to store the list of all products
    const [products, setProducts] = useState([]);
    // State to store the list of filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Function to fetch all products from the API
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

    return (
        <div className="flex bg-brandBgLight">
            <div className="pl-4">
                {/* Pass products and setFilteredProducts function to FilterOptions */}
                <FilterOptions
                    products={products}
                    setFilteredProducts={setFilteredProducts}
                />
            </div>
            {/* Pass the filtered products to ProductList for display */}
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default GraphicsListPage;


