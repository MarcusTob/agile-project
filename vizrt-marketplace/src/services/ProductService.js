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


    return{
        getAllProducts,

    }

    }) ();
    export default ProductService;