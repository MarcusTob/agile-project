import React from 'react';

const imageUrl = "http://localhost:5219/images";

const ProductItem = ({ product }) => {
    return (
        <div className="flex bg-brandOrange rounded-lg shadow-lg overflow-hidden my-8 w-full max-w-4xl mx-auto min-h-[300px]">

            <div className="w-1/2 relative">
                <img
                    className="object-cover w-full h-full"
                    src={`${imageUrl}/${product.productImage}`}
                    alt={`Picture of ${product.name}`}
                />
            </div>
            <div className="w-1/2 p-8 flex flex-col justify-start">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl font-semibold text-black-700 mb-4">${product.price}</p>
                <p className="text-base text-black-600 mb-4">{product.description}</p>
                <div className="flex-grow"></div>
                <button className="bg-black text-white py-2 px-4 rounded mt-auto">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;