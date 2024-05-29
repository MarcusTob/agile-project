import axios from "axios";

const ProductService = (() => {
    const productUrl = "http://localhost:5219/Marketplace/products";

    const getAllProducts = async () => {
        try{
            const response = await axios.get(productUrl);
            return response.data;
        }
        catch (error){
            console.error("error getting products", error);
        }
    }

    const getProductById = async (id) => {
        try{
            const response = await axios.get(`${productUrl}/${id}`);
            return response.data;
        }
        catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with an error', error.response.status, error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
            }
            console.error('Error config', error.config);
        }
    }


    return{
        getAllProducts,
        getProductById
    }

    }) ();
    export default ProductService;