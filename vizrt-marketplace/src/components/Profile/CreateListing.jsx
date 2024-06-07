import React, { useState } from 'react';
import ProductService from '../../services/ProductService';
import ImageUploadService from '../../services/ImageUploadService.ts';

const CreateListing = (onCreateProduct) => {
  const [image, setImage] = useState(null);
  const [newProduct, setNewProduct] = useState({
    productID: 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    specifications: '',
    creator: '',
    nrOfReviews: 0,
    rating: 0,
    tags: [],
    image: '',
    colors: []
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setNewProduct({ ...newProduct, image: file.name });
  }

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'productID' || e.target.name === 'price' || e.target.name === 'nrOfReviews' || e.target.name === 'rating') {
      value = Number(value);
    } else if (e.target.name === 'colors' || e.target.name === 'tags') {
      value = value.split(',').map(item => item.trim());
    }
    setNewProduct({ ...newProduct, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (image != null) {
        const imageUrl = await ImageUploadService.uploadImage(image);
        newProduct.image = imageUrl;
      }
      await ProductService.postProduct(newProduct);
      onCreateProduct(newProduct);
      console.log(newProduct);
    } catch (error) {
      console.error("Error uploading image or creating product", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="productID" value={newProduct.productID} onChange={handleChange} placeholder="ProductID" />
      <input name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" />
      <input name="description" value={newProduct.description} onChange={handleChange} placeholder="Description" />
      <input name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" />
      <input name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" />
      <input name="specifications" value={newProduct.specifications} onChange={handleChange} placeholder="Specifications" />
      <input name="creator" value={newProduct.creator} onChange={handleChange} placeholder="Creator" />
      <input name="nrOfReviews" value={newProduct.nrOfReviews} onChange={handleChange} placeholder="NrOfReviews" />
      <input name="rating" value={newProduct.rating} onChange={handleChange} placeholder="Rating" />
      <input name="tags" value={newProduct.tags} onChange={handleChange} placeholder="Tags" />
      <input 
        className="bg-gray-300 rounded"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        > 
      </input>      
      <input name="colors" value={newProduct.colors} onChange={handleChange} placeholder="Colors" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateListing;