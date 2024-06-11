import React from 'react'
import EditListing from '../components/Profile/EditListing'
import MyNavbar from '../components/Profile/MyNavbar'
import ProductService from '../services/ProductService'

const SellingUploadPage = () => {
  return (
    <div>
      <MyNavbar/>
      <EditListing onUpdateProduct={async (updatedProduct) => {
  //takes the newly created product and sends it to the database
  try {
    await ProductService.updateProduct(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
  }
}} />
    </div>
  );
};

export default SellingUploadPage;