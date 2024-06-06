import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// Define the base URL for product images
const imageUrl = "http://localhost:5219/images";

// Define the ProductItem component
const ProductItem = ({ product }) => {
  const [downloading, setDownloading] = useState(false); // State for controlling the download animation
  const [downloadComplete, setDownloadComplete] = useState(false); // State for controlling the completion popup
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('');

  // Function to handle navigation to the product page
  const handleViewItem = () => {
    navigate(`/product/${product.productID}`);
    console.log(product.colors);
  };

  // Function to handle the fake download animation and popup
  const handleDownload = () => {
    setDownloading(true); // Start the animation
    setTimeout(() => {
      setDownloading(false); // Reset the animation after 3 seconds
      setDownloadComplete(true); // Show the completion popup
    }, 3000);
  };

  // Function to close the download completion popup
  const handleClosePopup = () => {
    setDownloadComplete(false);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div className="relative flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-8 w-full max-w-4xl mx-auto min-h-[300px]">
      {/* Image Section */}
      <div className="w-1/2 relative">
        <img
          className="object-cover w-full h-full"
          src={`${imageUrl}/${product.image}`}
          alt={`Picture of ${product.name}`}
        />
      </div>
      {/* Text Section */}
      <div className="w-1/2 p-8 flex flex-col justify-start">
        {/* Product name */}
        <h3
          className="text-h3 font-bold font-customFont mb-2 cursor-pointer text-blue-500 underline"
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
        <div className="mb-4">
          <h3 className="text-white mb-2 text-p font-customFont">Choose Color:</h3>
          <div className="flex flex-wrap">
            {product.colors[0].split(',').map((color, i) => (
              <div
                key={i}
                title={color}
                className="w-color-circle-point"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  padding: '3px',
                  borderRadius: '50%',
                  marginRight: '10px',
                  marginBottom: '5px',
                  boxSizing: 'border-box',
                  transform: 'scale(1)',
                  boxShadow: selectedColor === color ? '0px 0px 0px 3px green' : 'none',
                  transition: 'transform 100ms ease 0s, box-shadow 100ms ease 0s',
                  background: color,
                  cursor: 'pointer',
                  position: 'relative',
                  outline: 'none',
                }}
                onClick={() => handleColorChange({ hex: color })}
              />
            ))}
          </div>
        </div>
        <div className="flex-grow"></div>
        {/* Download button */}
        <button
          onClick={handleDownload}
          className={`bg-green-500 text-p3 font-customFont text-white py-2 rounded mt-auto ${downloading ? 'animate-pulse' : ''}`}
        >
          {downloading ? 'Downloading...' : 'Download'}
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
export default ProductItem;
