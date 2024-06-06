import React from "react"; // Import React
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom

const imageUrl = "http://localhost:5219/images"; // Define the base URL for package images

// Define PackageItem component
const PackageItem = ({ graphicPackage }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to navigate to the package details page
  const handleViewItem = () => {
    navigate(`/package/${graphicPackage.packageID}`); // Navigate to the package details page using packageID
    console.log(graphicPackage); // Log the graphicPackage data to console
    console.log(graphicPackage.packageID); // Log the packageID to console
  };

  return (
    <div className="flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-1 w-full max-w-4xl mx-auto min-h-[300px]">
      {/* Image Section */}
      <div className="w-1/2 relative">
        <img
          className="object-cover w-full h-full"
          style={{ width: '100%', height: '300px' }} // Set a fixed width and height
          src={`${imageUrl}/${graphicPackage.image}`}
          alt={`Picture of ${graphicPackage.name}`}
        />{" "}
      </div>

      {/* Text Section */}
      <div className="w-1/2 p-8 flex flex-col justify-start">
        <h3 className="text-h3 font-bold font-customFont mb-2">{graphicPackage.name}</h3>
        <p className="text-p font-semibold font-customFont text-black mb-4">
          ${graphicPackage.price}
        </p>
        <p className="text-p3 font-customFont text-black mb-4">
          {graphicPackage.description}
        </p>
        <div className="flex-grow"></div>
        <button
          onClick={handleViewItem} // Attach handleViewItem function to onClick event of button
          className="bg-black text-p3 font-customFont text-white py-2 px-4 rounded mt-auto"
        >
          View Item
        </button>
      </div>
    </div>
  );
};

export default PackageItem; // Export PackageItem component
