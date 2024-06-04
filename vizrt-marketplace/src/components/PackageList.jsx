import React from "react";
import { useNavigate } from "react-router-dom";

const imageUrl = "http://localhost:5219/images";

// Cannot use Package because it is restricted, using GraphicPackage instead
const PackageItem = ({ graphicPackage }) => {
  const navigate = useNavigate();

  // Function to handle viewing the details of the package
  const handleViewItem = () => {
    // Navigate to the package details page
    navigate(`/package/${graphicPackage.packageID}`);
    // Log the selected package and its ID
    console.log(graphicPackage);
    console.log(graphicPackage.packageID);
  };

  return (
    <div className="flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-4 w-full max-w-2xl mx-auto min-h-96">
      {/* Image Section */}
      <div className="w-1/2 h-full relative">
        {/* Display the package image */}
        <img
          className="object-cover w-full h-full"
          src={`${imageUrl}/${graphicPackage.image}`}
          alt={`Picture of ${graphicPackage.name}`}
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2 p-8 flex flex-col justify-start">
        {/* Package name */}
        <h1 className="text-3xl font-bold mb-2">{graphicPackage.name}</h1>
        {/* Package price */}
        <p className="text-xl font-semibold text-black-700 mb-4">
          ${graphicPackage.price}
        </p>
        {/* Package description */}
        <p className="text-base text-black-600 mb-4">{graphicPackage.description}</p>
        {/* Spacer to push the button to the bottom */}
        <div className="flex-grow"></div>
        {/* Button to view the package item */}
        <button
          onClick={handleViewItem}
          className="bg-black text-white py-2 px-4 rounded mt-auto"
        >
          View Item
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
