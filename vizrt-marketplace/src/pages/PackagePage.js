import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PackageService from "../services/PackageService";
import PackageDetailsAndImage from "../components/PackageDetailsAndImage";

const imageUrl = "http://localhost:5219/images";

const PackagePage = () => {
  // Get package ID from route params
  const { id } = useParams();
  // State to store the package data
  const [graphicPackage, setPackage] = useState(null);
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("About");

  // Fetch package data based on ID
  useEffect(() => {
    const fetchPackage = async () => {
      if (id) {
        try {
          const graphicPackage = await PackageService.getPackageById(id);
          setPackage(graphicPackage);
        } catch (error) {
          console.error("Failed to fetch package", error);
        }
      } else {
        console.error("Package ID is undefined");
      }
    };
    fetchPackage();
  }, [id]);

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Define content based on active tab
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

  // Render the component
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center px-4 sm:px-0">
      {/* Render package details and image */}
      <div className="mt-8">
        <PackageDetailsAndImage
          imageUrl={imageUrl}
          graphicPackage={graphicPackage}
        />
      </div>
      {/* Tabs for About, Specifications, and Reviews */}
      <div className="flex justify-center space-x-8 mt-8">
        {["About", "Specifications", "Reviews"].map((tab) => (
          <div
            key={tab}
            className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
              activeTab === tab ? "underline" : ""
            }`}
            style={{ fontFamily: "Play, Helvetica" }}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Conditionally rendered content based on active tab */}
      <div
        className="mt-4 text-white text-[32px]"
        style={{ fontFamily: "Pontano_Sans, Helvetica" }}
      >
        {content}
      </div>
    </div>
  );
};

export default PackagePage;
