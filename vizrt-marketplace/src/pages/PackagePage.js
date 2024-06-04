import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PackageService from "../services/PackageService";
import PackageDetailsAndImage from "../components/PackageDetailsAndImage";

const imageUrl = "http://localhost:5219/images";

const PackagePage = () => {
  const { id } = useParams();
  const [graphicPackage, setPackage] = useState(null);
  const [activeTab, setActiveTab] = useState("About");

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!graphicPackage) {
    return <h1>Package not found</h1>;
  }

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

  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center px-4 sm:px-0">
      <div className="mt-8">
        <PackageDetailsAndImage
          imageUrl={imageUrl}
          graphicPackage={graphicPackage}
        />
      </div>
      {/* Tabs for About, Specifications, and Reviews */}
      <div className="flex justify-center space-x-8 mt-8">
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "About" ? "underline" : ""
          }`}
          style={{ fontFamily: "Play, Helvetica" }}
          onClick={() => handleTabClick("About")}
        >
          About
        </div>
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "Specifications" ? "underline" : ""
          }`}
          style={{ fontFamily: "Play, Helvetica" }}
          onClick={() => handleTabClick("Specifications")}
        >
          Specifications
        </div>
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "Reviews" ? "underline" : ""
          }`}
          style={{ fontFamily: "Play, Helvetica" }}
          onClick={() => handleTabClick("Reviews")}
        >
          Reviews
        </div>
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