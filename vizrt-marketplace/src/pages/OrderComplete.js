import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import "tailwindcss/tailwind.css";

const OrderComplete = () => {
  // State for rating
  const [rating, setRating] = useState(0);

  // Function to handle rating
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="bg-brandBgLight flex flex-col min-h-screen items-center justify-center">
      {/* Container with motion animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white p-12 rounded-lg shadow-md w-full max-w-4xl h-[80vh] text-center flex flex-col justify-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-4xl font-semibold mb-8"
        >
          Thank You For Your Order
        </motion.h2>
        {/* Download button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 mb-8 text-lg w-60 mx-auto"
        >
          Download
        </motion.button>
        {/* Rating section */}
        <div className="flex flex-col items-center space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-2xl font-medium mb-6"
          >
            Rate your shopping experience
          </motion.p>
          {/* Star rating buttons */}
          <div className="flex space-x-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`text-3xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => handleRating(star)}
              >
                ★
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderComplete;
