import React from "react";

// Component to display tabs and corresponding content
const TabsAndContent = ({ activeTab, handleTabClick, product }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Tab navigation */}
      <div className="flex justify-center space-x-8 mt-4">
        {/* About tab */}
        <div
          className={`font-customFont text-h3 text-white text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "About" ? "underline" : ""
          }`}
          onClick={() => handleTabClick("About")}
        >
          About
        </div>
        {/* Specifications tab */}
        <div
          className={`font-customFont text-h3 text-white text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "Specifications" ? "underline" : ""
          }`}
          onClick={() => handleTabClick("Specifications")}
        >
          Specifications
        </div>
        {/* Reviews tab */}
        <div
          className={`font-customFont text-h3 text-white text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === "Reviews" ? "underline" : ""
          }`}
          onClick={() => handleTabClick("Reviews")}
        >
          Reviews
        </div>
      </div>
      {/* Content for active tab */}
      <div className="mt-4 text-white font-customFont text-p w-full px-4 max-w-3xl mx-auto">
        {/* Display product description if the About tab is active */}
        {activeTab === "About" && <p>{product.description}</p>}
        {/* Display generic specifications */}
        {activeTab === "Specifications" && (
          <p>
            Our product is made from high-quality materials that provide
            superior support and comfort.
          </p>
        )}
        {/* Display generic reviews */}
        {activeTab === "Reviews" && (
          <p>
            Our product has received excellent reviews from athletes and fitness
            enthusiasts around the world.
          </p>
        )}
      </div>
    </div>
  );
};

export default TabsAndContent;