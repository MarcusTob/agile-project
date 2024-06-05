import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "../index.css";
import PackageService from "../services/PackageService";

// Defines the base URL for package images
const imageUrl = "http://localhost:5219/images";

const Starterpack = () => {
  // State to store the list of graphic packages
  const [graphicPackages, setPackages] = useState([]);

  // Fetch graphic packages when the component mounts
  useEffect(() => {
    // Array of package IDs to fetch
    const packageIDs = [1, 2, 3];
    // Fetch package details for each package ID asynchronously
    Promise.all(packageIDs.map((id) => PackageService.getPackageById(id)))
      .then((graphicPackage) => setPackages(graphicPackage))
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-white text-h3 font-bold mb-6 font-customFont">Starter packs</h1>
      {/* Grid of starter packs */}
      <div className="flex justify-center gap-5 flex-wrap">
        {/* Map through the graphic packages and render each as a link */}
        {graphicPackages.map((graphicPackage) => (
          <Link
            to={`/package/${graphicPackage.packageID}`}
            key={graphicPackage.packageID}
          >
            {/* Container for each starter pack */}
            <div className="relative w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-64 overflow-hidden">
              {/* Group for applying hover effects */}
              <div className="group">
                {/* Package image */}
                <img
                  src={`${imageUrl}/${graphicPackage.image}`}
                  alt={graphicPackage.name}
                  className="absolute object-cover h-full w-full blur-none transition duration-300 ease-in-out transform group-hover:blur-sm"
                />
                {/* Overlay with package name */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-100">
                  {/* Package name */}
                  <span className="text-white text-p font-bold font-customFont">
                    {graphicPackage.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Starterpack;
