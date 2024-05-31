import React from 'react';
import "../index.css";
import "tailwindcss/tailwind.css";
import CartService from '../services/CartService';

const imageUrl = "http://localhost:5219/images";

const ShoppingCart = () => {
    const cartItems = CartService.getCart();

    return (
        <div className="bg-brandBgLight flex flex-col min-h-screen items-center">
            <div className="flex w-full max-w-5xl mt-8 space-x-8">
                <div className="flex-grow bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
                    <div className="space-y-4">
                        {/* Shopping cart items*/}
                        <div>
                            {cartItems.map((item, index) => (
                            <div key={index}>
                                {/* Display item details here */}
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <img src={`${imageUrl}/${item.productImage}`} alt={item.name} />
                            </div>
                        ))}
                        </div>
                        {/* <p className="text-gray-600">No items in your cart.</p> */}
                    </div>
                </div>
                <div className="w-1/3 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            {/* Sumary of details*/}
                            <p className="text-gray-600">Your cart is empty.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-500 text-white font-bold py-2 px-12 rounded hover:bg-blue-700">
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;