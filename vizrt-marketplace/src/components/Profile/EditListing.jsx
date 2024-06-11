import React, { useState, useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ImageUploadService from '../../services/ImageUploadService.ts';
import { useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import { useEffect } from 'react';

const EditListing = ({ onUpdateProduct }) => {
    // Get the product ID from the URL
    const { id } = useParams();
  
    const [image, setImage] = useState(null);  // State for storing the image file
    const [updatedProduct, setUpdatedProduct] = useState({
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
    });  // State for storing the new product details
  
    // Fetch the product when the component mounts
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const product = await ProductService.getProductById(id);
          setUpdatedProduct({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            specifications: product.specifications,
            creator: localStorage.getItem('username'),
            nrOfReviews: product.nrOfReviews,
            rating: product.rating,
            tags: product.tags.join(', '),
            image: product.image,
            colors: product.colors.join(', ')
          });
        } catch (err) {
          console.error('Error fetching product:', err);
        }
      };
      fetchProduct();
    }, [id]);

  
  // Handler for when an image is selected
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setUpdatedProduct({ ...updatedProduct, image: file.name });
  }

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Attempt to upload the image if it exists
    try {
      if (image != null) {
        await ImageUploadService.uploadImage(image);
      }
    }
    catch (error) {
      console.error('Error updating image:', error);
    }

    // Attempt to create the new product
    try {
      await onUpdateProduct(updatedProduct);
      console.log(updatedProduct);
    }
    catch (error) {
      console.error('Error updating product:', error);
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
                    value={updatedProduct.name} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} 
                    placeholder="Name" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Description</label>
                  <input 
                    name="description" 
                    value={updatedProduct.description} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })} 
                    placeholder="Description" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Price</label>
                  <input 
                    name="price" 
                    value={updatedProduct.price} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} 
                    placeholder="Price" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Category</label>
                  <input 
                    name="category" 
                    value={updatedProduct.category} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })} 
                    placeholder="Category" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Specifications</label>
                  <input 
                    name="specifications" 
                    value={updatedProduct.specifications} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, specifications: e.target.value })} 
                    placeholder="Specifications" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Tags</label>
                  <input 
                    name="tags" 
                    value={updatedProduct.tags} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, tags: e.target.value })} 
                    placeholder="Tags (comma-separated)" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div>
                  <label className="block text-p3 font-customFont font-semibold mb-2">Colors</label>
                  <input 
                    name="colors" 
                    value={updatedProduct.colors} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, colors: e.target.value })} 
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
      </div>
    </div>
  );
};

export default EditListing;
