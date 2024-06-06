import React, { useEffect, useState } from "react";
import PackageList from "../components/Browsing/PackageList";
import PackageService from "../services/PackageService";

const PackageListPage = () => {
  // State to store the list of all packages
  const [graphicPackages, setGraphicPackages] = useState([]);

  // Function to fetch all packages from the API
  const getAllPackages = async () => {
    try {
      // Fetch packages from PackageService
      const response = await PackageService.getAllPackages();
      // Set the fetched packages to the graphicPackages state
      setGraphicPackages(response);
    } catch (error) {
      console.error("Failed to fetch packages", error);
    }
  };

  // useEffect to fetch packages when the component mounts
  useEffect(() => {
    getAllPackages();
  }, []);

  // Render the component
  return (
    <div className="flex bg-brandBgLight">
      {/* Render the PackageList component */}
      <PackageList graphicPackages={graphicPackages} />
    </div>
  );
};

export default PackageListPage;
