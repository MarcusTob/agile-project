import React from "react";
import PackageItem from "./PackageItem";


const PackageList = ({ graphicPackages }) => {
  return (
    <div className="flex justify-center items-start pt-4 min-h-screen w-full">
      <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">
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
