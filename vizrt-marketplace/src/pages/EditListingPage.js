import React from 'react'
import EditListing from '../components/Profile/EditListing'
import MyNavbar from '../components/Profile/MyNavbar'
import ProductService from '../services/ProductService'

const EditListingPage = () => {
  return (
    <div>
      <MyNavbar/>
      <EditListing onUpdateProduct={async (id, updatedProduct) => {
  //takes the newly created product and sends it to the database
  try {
    await ProductService.updateProduct(id, updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
  }
}} />
    </div>
  );
};

export default EditListingPage;