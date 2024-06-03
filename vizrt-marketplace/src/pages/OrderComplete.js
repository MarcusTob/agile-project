import React, { useState } from 'react';
import "../index.css";
import "tailwindcss/tailwind.css";

const OrderComplete = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className="bg-brandBgLight flex flex-col min-h-screen items-center justify-center">
            <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-4xl h-[80vh] text-center flex flex-col justify-center space-y-20">
                <h2 className="text-4xl font-semibold mb-8">Thank You For Your Order</h2>
                <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 mb-8 text-lg w-60 mx-auto">
                    Download
                </button>
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-medium mb-6">Rate your shopping experience</p>
                    <div className="flex space-x-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className={`text-3xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                onClick={() => handleRating(star)}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;


