import axios from "axios";

const ProductService = (() => {
  const productUrl = "http://localhost:5219/Marketplace/products";

  const getAllProducts = async () => {
    try {
      const response = await axios.get(productUrl);
      return response.data;
    } catch (error) {
      console.error("error getting products", error);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`${productUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error("error getting product by id", error);
    }
  };

  return {
    getAllProducts,
    getProductById,
  };
})();
export default ProductService;
