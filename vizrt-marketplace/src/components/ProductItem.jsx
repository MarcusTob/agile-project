import React from 'react';
import { useNavigate } from 'react-router-dom';

const imageUrl = "http://localhost:5219/images";
const ProductItem = ({ product }) => {

    const navigate = useNavigate();

    const handeViewItem = () => {
        navigate(`/product/${product.productID}`);
        console.log(product)
        console.log(product.productID)
    }


    return (
        <div className="bg-brandOrange rounded-lg p-3 max-w-sm overflow-hidden shadow-lg mx-auto my-8 text-black text-base w-max">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Specifications: {product.specifications}</p>
            <p>Creator: {product.creator}</p>
            <p>{product.nrOfReviews} Reviews</p>
            <p>{product.rating}/5</p>    
            <img className="w-80 object-cover rounded mb-4"
             src={`${imageUrl}/${product.productImage}`} alt={`picture of ${product.name}`}/>
            <button onClick={ handeViewItem }>View Item</button>
        </div>
    )
}
export default ProductItem;