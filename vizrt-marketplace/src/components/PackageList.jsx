import React from "react";
import PackageItem from "./PackageItem";

const imageUrl = "http://localhost:5219/images";

const PackageList = ({ graphicPackages }) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2">
        {graphicPackages.map((graphicPackage) => (
          <PackageItem
            key={graphicPackage.PackageID}
            graphicPackage={graphicPackage}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
