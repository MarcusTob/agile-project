import React from "react"; // Import React
import PackageItem from "./PackageItem"; // Import PackageItem component

const imageUrl = "http://localhost:5219/images"; // Define the base URL for package images

// Define PackageList component
const PackageList = ({ graphicPackages }) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2">
        {graphicPackages.map((graphicPackage) => (
          <PackageItem // Render PackageItem component for each graphic package
            key={graphicPackage.PackageID} // Use PackageID as the unique key
            graphicPackage={graphicPackage} // Pass graphicPackage data as prop
          />
        ))}
      </div>
    </div>
  );
};

export default PackageList; // Export PackageList component
