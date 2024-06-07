import React, { useState } from 'react';
import ProductService from '../../services/ProductService';
import ImageUploadService from '../../services/ImageUploadService.ts';

const CreateListing = ({onCreateProduct}) => {
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

  const handleSubmit = async (e) => {
  e.preventDefault();
  // Convert the tags and colors strings into arrays
  const tagsArray = newProduct.tags.split(',').map(tag => tag.trim());
  const colorsArray = newProduct.colors.split(',').map(color => color.trim());

  const updatedProduct = {
    ...newProduct,
    tags: tagsArray,
    colors: colorsArray,
  };

    try {
      if(image!=null){
        await ImageUploadService.uploadImage(image);
      }
    }
    catch (error) {
      console.error('Error uploading image:', error);
    }
    try{
      const response = await ProductService.postProduct(newProduct);
      onCreateProduct(updatedProduct);
      setNewProduct({
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
      console.log(newProduct);
    }
    catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="productID" value={newProduct.productID} onChange={(e)=>setNewProduct({...newProduct, productID: e.target.value})} placeholder="ProductID" />
      <input name="name" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct, name: e.target.value})} placeholder="Name" />
      <input name="description" value={newProduct.description} onChange={(e)=>setNewProduct({...newProduct, description: e.target.value})} placeholder="Description" />
      <input name="price" value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct, price: e.target.value})} placeholder="Price" />
      <input name="category" value={newProduct.category} onChange={(e)=>setNewProduct({...newProduct, category: e.target.value})} placeholder="Category" />
      <input name="specifications" value={newProduct.specifications} onChange={(e)=>setNewProduct({...newProduct, specifications: e.target.value})} placeholder="Specifications" />
      <input name="creator" value={newProduct.creator} onChange={(e)=>setNewProduct({...newProduct, creator: e.target.value})} placeholder="Creator" />
      <input name="tags" value={newProduct.tags} onChange={(e)=>setNewProduct({...newProduct, tags: e.target.value})} placeholder="Tags" />
      <input 
        className="bg-gray-300 rounded"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        > 
      </input>      
      <input name="colors" value={newProduct.colors} onChange={(e)=>setNewProduct({...newProduct, colors: e.target.value})} placeholder="Colors" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateListing;