import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
const imageUrl = "http://localhost:5219/images";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        const product = await ProductService.getProductById(id);
        setProduct(product);
    }
    fetchProduct();
  }, [id]);

    if (!product) {
        return <h1>Product not found</h1>
    }

    return (
        <div>
          <h1>{product.productID}</h1>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img className="w-80 object-cover rounded mb-4"
             src={`${imageUrl}/${product.productImage}`} alt={`picture of ${product.name}`}/>
        </div>
    );
}

export default ProductDetail;