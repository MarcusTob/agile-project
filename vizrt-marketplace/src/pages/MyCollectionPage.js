import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import CollectionList from '../components/CollectionList';
import ProfileNavbar from '../components/ProfileNavbar';

const MyCollectionPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
        <div className="flex bg-brandBgLight min-h-screen">
            <div className="flex flex-col items-center px-4 py-8" >
                <div className="w-full max-w screen-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">My Collection</h2>
                    <CollectionList products={products} />
                </div>
            </div>
        </div>
    );
};

export default MyCollectionPage;