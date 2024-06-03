import React, { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const SellingUpload = () => {
  // State for images, details, and colors
  const [images, setImages] = useState([null, null, null]);
  const [details, setDetails] = useState({ listing: '', price: '', about: '', specification: '' });
  const [colors, setColors] = useState([]);

  // Function to handle image upload
  const handleImageChange = (e, index) => {
    const files = e.target.files;
    if (files && files[0]) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(files[0]);
      setImages(newImages);
    }
  };

  // Function to handle input change for details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // Function to delete an image
  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  // Function to delete a detail price, about, specification
  const handleDeleteDetail = (field) => {
    setDetails({ ...details, [field]: '' });
  };

  // Function to add a new color
  const handleAddColor = () => {
    setColors([...colors, '#000000']);
  };

  // Function to handle color change
  const handleColorChange = (color, index) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  // Function to delete a color
  const handleDeleteColor = (index) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  // Function to handle hex code change
  const handleHexCodeChange = (e, index) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
  };

  return (
    <div className="bg-brandBg min-h-screen flex flex-col items-center py-10">
      <div className="bg-white p-10 w-full rounded-lg max-w-7xl">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Create a New Listing</h1>
        <div className="flex">
          {/* Image Uploads */}
          <div className="flex flex-col items-center space-y-4">
            {/* Display image previews */}
            {images.map((image, index) => (
              <div key={index} className="relative w-40 h-40 bg-gray-300 rounded-md overflow-hidden">
                {image ? (
                  <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500 flex items-center justify-center w-full h-full">Image {index + 1}</span>
                )}
                {/* Edit image button */}
                <label className="absolute top-0 right-0 m-1 cursor-pointer text-gray-500">
                  <FiEdit2 />
                  <input type="file" className="hidden" onChange={(e) => handleImageChange(e, index)} />
                </label>
                {/* Delete image button */}
                {image && (
                  <button className="absolute top-0 left-0 m-1 text-gray-500" onClick={() => handleDeleteImage(index)}>
                    <FiTrash2 />
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Details Inputs */}
          <div className="flex flex-col ml-10 w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold mb-4">3D-effects of motion graphics</h1>
              <button className="bg-brandBg text-white px-8 py-2 rounded">Post</button>
            </div>
            {/* Price Input */}
            <div className="mb-4 w-1/4">
              <label className="block text-2xl font-semibold mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={details.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {/* Delete price button */}
              {details.price && (
                <button className="mt-2 text-gray-500" onClick={() => handleDeleteDetail('price')}>
                  <FiTrash2 />
                </button>
              )}
            </div>
            {/* About and Specification Inputs */}
            <div className="flex space-x-10 mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">About</h3>
                <textarea
                  name="about"
                  value={details.about}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {/* Delete about button */}
                {details.about && (
                  <button className="mt-2 text-gray-500" onClick={() => handleDeleteDetail('about')}>
                    <FiTrash2 />
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">Specification</h3>
                <textarea
                  name="specification"
                  value={details.specification}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {/* Delete specification button */}
                {details.specification && (
                  <button className="mt-2 text-gray-500" onClick={() => handleDeleteDetail('specification')}>
                    <FiTrash2 />
                  </button>
                )}
              </div>
            </div>
            {/* Color Inputs */}
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Colors</h3>
              <div className="flex flex-wrap items-center">
                {/* Color picker and hex code input */}
                {colors.map((color, index) => (
                  <div key={index} className="relative flex items-center mr-4 mb-4">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => handleColorChange(e.target.value, index)}
                      className="w-10 h-10"
                    />
                    <input
                      type="text"
                      value={color}
                      onChange={(e) => handleHexCodeChange(e, index)}
                      className="ml-2 p-1 border rounded w-24"
                    />
                    {/* Delete color button */}
                    <button className="ml-2 text-gray-500" onClick={() => handleDeleteColor(index)}>
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
                {/* Add color button */}
                <button className="bg-brandBg text-white px-4 py-2 rounded" onClick={handleAddColor}>
                  Add Color
                </button>
                </div>
             </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SellingUpload;
