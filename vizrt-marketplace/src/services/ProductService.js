import axios from "axios";

const ProductService = (() => {
  const productUrl = "http://localhost:5219/Marketplace/products";

  // Function to fetch all products
  const getAllProducts = async () => {
    try {
      // Send a GET request to the productUrl
      const response = await axios.get(productUrl);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // error logging for debugging
      console.error("Error getting products", error);
    }
  };

  // Function to fetch a product by its ID
  const getProductById = async (id) => {
    try {
      // get request to api using id
      const response = await axios.get(`${productUrl}/${id}`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // error logging for debugging
      console.error("Error getting product by ID", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    //debugging
    console.log(`Updating product with ID: ${id}`);
    console.log(updatedProduct);
    try {
      // put request to update product using id
      const response = await axios.put(`${productUrl}/${id}`, updatedProduct, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Return the data from the response
      return response.data;
    } catch (error) {
      // error logging for debugging
      console.error("Error updating product", error);
    }
  };

  //function to post a new product
  const postProduct = async (newProduct) => {
    //debugging
    console.log(newProduct, productUrl)
    try {
      //post request to update new product
      const response = await axios.post(productUrl, newProduct);
      return response.data;
    } catch (error) {
      // error logging for debugging
      console.error("Error posting product", error);
    }
  }

  const deleteProduct = async (id) => {
    try {
      //delete request to delete product using id
      await axios.delete(`${productUrl}/${id}`);
    }
    catch (error) {
      // error logging for debugging
      console.error("Error deleting product", error);
    }
  }

  return {
    getAllProducts,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct
  };
})();

export default ProductService;
