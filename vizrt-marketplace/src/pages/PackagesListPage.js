import React, { useEffect, useState } from 'react';
import PackageList from '../components/PackageList';
import PackageService from '../services/PackageService';

const PackageListPage = () => {
    // State to store the list of all products
    const [graphicPackage, setGraphicPackage] = useState([]);

    // Function to fetch all products from the API
    const getAllPackages = async () => {
        // Fetch products from ProductService
        const response = await PackageService.getAllPackages();
        // Set the fetched products to the products state
        setGraphicPackage(response);
    };

    // useEffect to fetch products when the component mounts
    useEffect(() => {
        getAllPackages();
    }, []);

    return (
        <div className="flex bg-brandBgLight">
            <PackageList graphicPackages={graphicPackage} />
        </div>
    );
};

export default PackageListPage;


