import axios from "axios";

const ProductService = (() => {
  // Define the base URL for the products API
  const productUrl = "http://localhost:5219/Marketplace/products";

  // Function to fetch all products
  const getAllProducts = async () => {
    try {
      // Send a GET request to the productUrl
      const response = await axios.get(productUrl);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error getting products", error);
    }
  };

  // Function to fetch a product by its ID
  const getProductById = async (id) => {
    try {
      // Send a GET request to the specific product URL using the provided ID
      const response = await axios.get(`${productUrl}/${id}`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error getting product by ID", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      // Send a PUT request to the specific product URL using the provided ID and updated product data
      const response = await axios.put(`${productUrl}/${id}`, updatedProduct);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("Error updating product", error);
    }
  };

  //function to post a new product
  const postProduct = async (newProduct) => {
    console.log(newProduct, productUrl)
    try {
      const response = await axios.post(productUrl, newProduct);
      return response.data;
    } catch (error) {
      console.error("Error posting product", error);
    }
  }



  // Return an object with the exposed functions
  return {
    getAllProducts,
    getProductById,
    postProduct,
    updateProduct
  };
})();

export default ProductService; // Export the ProductService object
