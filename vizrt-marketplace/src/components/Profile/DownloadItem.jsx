import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const imageUrl = "http://localhost:5219/images";

const DownloadItem = ({ product }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("");

  // Function to handle navigation the page
  const handleViewItem = () => {
    navigate(`/product/${product.productID}`);
    console.log(product.colors);
  };

  // Function to handle the download animation and popup
  // Function to handle the download animation and popup
  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false); // Reset the animation after 3 seconds
      setDownloadComplete(true); // Show the completion
    }, 3000);
  };

  // Function to close the download completion
  const handleClosePopup = () => {
    setDownloadComplete(false);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div className="relative flex flex-col bg-brandOrange rounded-lg shadow-lg overflow-hidden my-8 w-full max-w-sm mx-auto min-h-[400px]">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img
          className="object-cover w-full h-full"
          src={`${imageUrl}/${product.image}`}
          alt={`Picture of ${product.name}`}
        />
      </div>
      {/* Text Section */}
      <div className="p-8 flex flex-col justify-start flex-grow">
        {/* Product name */}
        <h3
          className="text-h3 font-bold font-customFont mb-2 cursor-pointer text-black underline"
          onClick={handleViewItem}
        >
          {product.name}
        </h3>
        {/* Product price */}
        <p className="text-p font-semibold font-customFont text-black mb-4">
          ${product.price}
        </p>
        {/* Product description */}
        <p className="text-p3 font-customFont text-black mb-4">
          {product.description}
        </p>
        {/* Product category */}
        <p className="text-p3 font-semibold text-black mb-4">
          {product.category}
        </p>
        {/* Colors */}
        {product.category !== "Package" && (
          <div className="mb-4">
            <h3 className="text-white mb-2 text-p font-customFont">
              Choose Color:
            </h3>
            <div className="flex flex-wrap">
              {product.colors &&
                product.colors.length > 0 &&
                product.colors[0].split(",").map((color, i) => (
                  <div
                    key={i}
                    title={color}
                    className="w-color-circle-point"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      padding: "3px",
                      borderRadius: "50%",
                      marginRight: "10px",
                      marginBottom: "5px",
                      boxSizing: "border-box",
                      transform: "scale(1)",
                      boxShadow:
                        selectedColor === color
                          ? "0px 0px 0px 3px green"
                          : "none",
                      transition:
                        "transform 100ms ease 0s, box-shadow 100ms ease 0s",
                      background: color,
                      cursor: "pointer",
                      position: "relative",
                      outline: "none",
                    }}
                    onClick={() => handleColorChange({ hex: color })}
                  />
                ))}
            </div>
          </div>
        )}
        {/* Download button */}
        <button
          onClick={handleDownload}
          className={`bg-green-500 text-p3 font-customFont text-white py-2 rounded mt-auto ${
            downloading ? "animate-pulse" : ""
          }`}
        >
          {downloading ? "Downloading..." : "Download"}
        </button>
      </div>
      {/* Download Completion Popup */}
      {downloadComplete && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-gray-700 font-bold mb-4">Download Complete!</p>
            <button
              onClick={handleClosePopup}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the component
export default DownloadItem;
