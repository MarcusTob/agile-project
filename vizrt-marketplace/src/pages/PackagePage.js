import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import { useParams } from "react-router-dom"; // Import useParams hook from react-router-dom
import PackageService from "../services/PackageService"; // Import PackageService for fetching package data
import PackageDetailsAndImage from "../components/Browsing/PackageDetailsAndImage"; // Import PackageDetailsAndImage component

const imageUrl = "http://localhost:5219/images"; // Define the base URL for package images

const PackagePage = () => {
  const { id } = useParams(); // Destructure the id parameter from the URL using useParams
  const [graphicPackage, setPackage] = useState(null); // State for storing the package data
  const [activeTab, setActiveTab] = useState("About"); // State for managing active tab

  // useEffect hook to fetch package data when the component mounts or when the id parameter changes
  useEffect(() => {
    const fetchPackage = async () => { // Define an async function to fetch package data
      if (id) { // Check if the id parameter exists
        try {
          const graphicPackage = await PackageService.getPackageById(id); // Fetch package data using PackageService
          setPackage(graphicPackage); // Update the state with the fetched package data
        } catch (error) {
          console.error("Failed to fetch package", error); // Log error if fetching package data fails
        }
      } else {
        console.error("Package ID is undefined"); // Log error if the id parameter is undefined
      }
    };
    fetchPackage(); // Call the fetchPackage function
  }, [id]); // useEffect dependency array with id parameter

  // Function to handle tab click and update the active tab state
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Conditional rendering based on the existence of package data
  if (!graphicPackage) {
    return <h1 className="font-customFont text-h3">Package not found</h1>; // Render a message if package data is not available
  }

  // Define content based on the active tab
  let content;
  switch (activeTab) {
    case "About":
      content = <p>{graphicPackage.description}</p>;
      break;
    case "Specifications":
      content = (
        <p>
          Our package is made from high-quality materials that provide superior
          support and comfort.
        </p>
      );
      break;
    case "Reviews":
      content = (
        <p>
          Our package has received excellent reviews from users around the
          world.
        </p>
      );
      break;
    default:
      content = <p>{graphicPackage.description}</p>;
  }

  // Return JSX representing the PackagePage component
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center px-4 sm:px-0">
      <div className="mt-8">
        <PackageDetailsAndImage // Render PackageDetailsAndImage component with package data
          imageUrl={imageUrl}
          graphicPackage={graphicPackage}
        />
      </div>
      {/* Tabs for About, Specifications, and Reviews */}
      <div className="flex justify-center space-x-8 mt-8">
        <div
          className={`font-customFont text-h3 text-white text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "About" ? "underline" : ""
          }`}
          onClick={() => handleTabClick("About")}
        >
          About
        </div>
        <div
          className={`font-customFont text-h3 text-white text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "Specifications" ? "underline" : ""
          }`}
          onClick={() => handleTabClick("Specifications")}
        >
          Specifications
        </div>
        <div
          className={`font-customFont text-h3 text-white text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "Reviews" ? "underline" : ""
          }`}
          onClick={() => handleTabClick("Reviews")}
        >
          Reviews
        </div>
      </div>
      {/* Conditionally rendered content based on active tab */}
      <div
        className="mt-4 text-white font-customFont text-p w-full px-4 max-w-3xl mx-auto" 
      >
        {content}
      </div>
    </div>
  );
};

export default PackagePage; // Export the PackagePage component
