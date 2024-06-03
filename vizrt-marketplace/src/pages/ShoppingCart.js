import React, { useState } from 'react';
import "../index.css";
import "tailwindcss/tailwind.css";
import CartService from '../services/CartService';

const imageUrl = "http://localhost:5219/images";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(CartService.getCart());

    // Function to remove item from cart
    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        CartService.updateCart(updatedCart); // Update local storage
    };

    return (
        <div className="bg-brandBgLight flex flex-col min-h-screen items-center">
            <div className="flex w-full max-w-5xl mt-8 space-x-8">
                <div className="flex-grow bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
                    <div className="space-y-4">
                        {cartItems.length > 0 ? cartItems.map((item, index) => (
                            <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                                <img className="w-16 h-16 object-cover rounded mr-4" src={`${imageUrl}/${item.productImage}`} alt={item.name} />
                                <div className="flex-grow">
                                    <p className="text-lg font-medium">{item.name}</p>
                                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                                </div>
                                <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(index)}>Remove from cart</button>
                            </div>
                        )) : (
                            <p className="text-gray-600">No items in your cart.</p>
                        )}
                    </div>
                </div>
                <div className="w-1/3 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            {cartItems.length > 0 ? (
                                <div>
                                    <p className="text-gray-700">Total Items: {cartItems.length}</p>
                                    <p className="text-gray-700">Total Price: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                                </div>
                            ) : (
                                <p className="text-gray-600">Your cart is empty.</p>
                            )}
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
