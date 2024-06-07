import React from 'react'
import SellingUpload from '../components/Profile/SellingUpload'
import CreateListing from '../components/Profile/CreateListing'
import MyNavbar from '../components/Profile/MyNavbar'
import ProductService from '../services/ProductService'

const SellingUploadPage = () => {
  return (
    <div>
      <MyNavbar/>
      <CreateListing onCreateProduct={async (newProduct) => {
  try {
    await ProductService.postProduct(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
  }
}} />
    </div>
  );
};

export default SellingUploadPage;
