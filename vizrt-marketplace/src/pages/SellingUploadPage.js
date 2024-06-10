import React from 'react'
import CreateListing from '../components/Profile/CreateListing'
import MyNavbar from '../components/Profile/MyNavbar'
import ProductService from '../services/ProductService'

const SellingUploadPage = () => {
  return (
    <div>
      <MyNavbar/>
      <CreateListing onCreateProduct={async (newProduct) => {
  //takes the newly created product and sends it to the database
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
