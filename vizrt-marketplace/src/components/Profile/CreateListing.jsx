import React, { useState, useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ImageUploadService from '../../services/ImageUploadService.ts';

const CreateListing = ({ onCreateProduct }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [image, setImage] = useState(null);  // State for storing the image file
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    specifications: '',
    //automatically takes the username of the logged in user and sets it as the "creator"
    creator: localStorage.getItem('username'),
    nrOfReviews: 0,
    rating: 0,
    tags: '',
    image: '',
    colors: ''
  });  // State for storing the new product details

  // Handler for when an image is selected
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setNewProduct({ ...newProduct, image: file.name });
  }

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert tags and colors from comma-separated strings to arrays, to match what the database expects
    const tagsArray = newProduct.tags.split(',').map(tag => tag.trim());
    const colorsArray = newProduct.colors.split(',').map(color => color.trim());

    const updatedProduct = {
      ...newProduct,
      tags: tagsArray,
      colors: colorsArray,
    };

    // Attempt to upload the image if it exists
    try {
      if (image != null) {
        await ImageUploadService.uploadImage(image);
      }
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
    catch (error) {
      console.error('Error uploading image:', error);
    }

    // Attempt to create the new product
    try {
      onCreateProduct(updatedProduct);
      // Reset the form state
      setNewProduct({
        name: '',
        description: '',
        price: 0,
        category: '',
        specifications: '',
        creator: localStorage.getItem('username'),
        nrOfReviews: 0,
        rating: 0,
        tags: '',
        image: '',
        colors: ''
      });
      setImage(null);
      console.log(updatedProduct);
    }
    catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="bg-brandBg min-h-screen flex flex-col items-center py-10">
      <div className="bg-white p-10 w-full rounded-lg max-w-7xl">
        <h1 className="text-h1 font-customFont font-bold mb-6">Create a New Listing</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex">
            {/* Image Display and Upload */}
            <div className="flex flex-col items-center space-y-4 mr-10">
              <div className="relative w-40 h-40 bg-gray-300 rounded-md overflow-hidden">
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray text-p3 font-customFont flex items-center justify-center w-full h-full">No Image</span>
                )}
                {/* Remove image button */}
                {image && (
                  <button className="absolute text-brandRed top-0 right-0 m-1" onClick={() => setImage(null)}>
                    <FiTrash2 />
                  </button>
                )}
              </div>
              {/* Image upload button */}
              <label className="bg-gray-300 rounded px-4 py-2 border cursor-pointer text-center">
                Choose file
                <input 
                  className="hidden" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                />
              </label>
            </div>
            {/* Details Inputs */}
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Name</label>
                  <input 
                    name="name" 
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
                    placeholder="Name" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Description</label>
                  <input 
                    name="description" 
                    value={newProduct.description} 
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
                    placeholder="Description" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Price</label>
                  <input 
                    name="price" 
                    value={newProduct.price} 
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
                    placeholder="Price" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Category</label>
                  <select 
                    name="category" 
                    value={newProduct.category} 
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} 
                    placeholder="Category" 
                    className="w-full p-2 border rounded" 
                  >
                    <option value="">Choose a category</option>
                    <option value="News Graphics">News Graphics</option>
                    <option value="Sports Graphics">Sports Graphics</option>
                    <option value="Weather Graphics">Weather Graphics</option>
                    <option value="Election Graphics">Election Graphics</option>
                    <option value="Corporate Graphics">Corporate Graphics</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Financial">Financial</option>
                    <option value="Eports">Eports</option>
                  </select>
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Specifications</label>
                  <input 
                    name="specifications" 
                    value={newProduct.specifications} 
                    onChange={(e) => setNewProduct({ ...newProduct, specifications: e.target.value })} 
                    placeholder="Specifications" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Tags</label>
                  <input 
                    name="tags" 
                    value={newProduct.tags} 
                    onChange={(e) => setNewProduct({ ...newProduct, tags: e.target.value })} 
                    placeholder="Tags (comma-separated)" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Colors</label>
                  <input 
                    name="colors" 
                    value={newProduct.colors} 
                    onChange={(e) => setNewProduct({ ...newProduct, colors: e.target.value })} 
                    placeholder="Colors (comma-separated)" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
              </div>
              {/* Submit button */}
              <button type="submit" className="bg-brandBg text-white px-8 py-2 rounded text-p3 font-customFont mt-4 w-1/4">Submit</button>
            </div>
          </div>
        </form>
        {showMessage && (
          <div className="absolute bg-white rounded-lg p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
            <p className="text-gray text-h3 font-customFont">Listing Created!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateListing;
