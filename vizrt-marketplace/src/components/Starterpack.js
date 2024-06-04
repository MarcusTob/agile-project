import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "../index.css";
import PackageService from "../services/PackageService";
const imageUrl = "http://localhost:5219/images";
const Starterpack = () => {
  const [graphicPackages, setPackages] = useState([]);

  useEffect(() => {
    const packageIDs = [1, 2, 3];
    Promise.all(packageIDs.map((id) => PackageService.getPackageById(id))).then(
      (graphicPackage) => setPackages(graphicPackage)
    );
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-6">Starter packs</h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {graphicPackages.map((graphicPackage) => (
          <Link
            to={`/package/${graphicPackage.packageID}`}
            key={graphicPackage.packageID}
          >
            <div className="relative w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-64 overflow-hidden">
              <div className="group">
                <img
                  src={`${imageUrl}/${graphicPackage.image}`}
                  alt={graphicPackage.name}
                  className="absolute object-cover h-full w-full blur-none transition duration-300 ease-in-out transform group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-100">
                  <span className="text-white text-xl font-bold">
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
