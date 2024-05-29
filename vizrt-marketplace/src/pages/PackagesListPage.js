import React, { useEffect, useState } from 'react';
import FilterOptions from '../components/FilterOptions';
import PackageList from '../components/PackageList';
import PackageService from '../services/PackageService';

const PackageListPage = () => {
    // State to store the list of all products
    const [graphicPackage, setGraphicPackage] = useState([]);
    // State to store the list of filtered products
    const [filteredPackages, setFilteredPackages] = useState([]);

    // Function to fetch all products from the API
    const getAllPackages = async () => {
        // Fetch products from ProductService
        const response = await PackageService.getAllPackages();
        // Set the fetched products to the products state
        setGraphicPackage(response);
        // Initialize filteredProducts with all products initially
        setFilteredPackages(response);
    };

    // useEffect to fetch products when the component mounts
    useEffect(() => {
        getAllPackages();
    }, []);

    return (
        <div className="flex bg-brandBgLight">
            <div className="pl-4">
                {/* Pass products and setFilteredProducts function to FilterOptions */}
                <FilterOptions
                    graphicPackages={graphicPackage}
                    setFilteredPackages={setFilteredPackages}
                />
            </div>
            {/* Pass the filtered products to ProductList for display */}
            <PackageList graphicPackages={filteredPackages} />
        </div>
    );
};

export default PackageListPage;


