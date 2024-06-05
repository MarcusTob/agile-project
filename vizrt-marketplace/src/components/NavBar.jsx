import React, { useEffect, useState} from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "../index.css";
import "tailwindcss/tailwind.css";
import { useContext } from "react";
import UserContext from "../UserContext";
import { IoIosSearch } from "react-icons/io";
import CartService from '../services/CartService';


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems ] = useState(CartService.getCart());
  // Context for user authentication
  const { user, setUser } = useContext(UserContext);

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Effect to set user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const unsubscribe = CartService.subscribe(newCart => {
      setCartItems(newCart);
      return unsubscribe;
    });
  }, []);


  return (
    // Navbar container with flex properties, background, padding, and shadow
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src="/images/logo-vizrt.png" alt="Vizrt Logo" className="w-32 h-auto object-cover" />
      </a>

      {/* Search Bar and Links */}
      <div className="flex flex-col items-left w-1/2">
        {/* Search bar container */}
        <div className="border-2 border-solid border-gray-600 flex items-center w-full gap-2 p-2 rounded-md bg-white">
        <IoIosSearch size="1.5em"/>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="flex-1 text-gray-600 bg-transparent outline-none"
          />
        </div>
        {/* Navigation links */}
        <div className="flex space-x-8 mt-2 start-end">
          <a href="/graphics" className="text-black text-p font-customFont">
            Graphics
          </a>
          <a href="/packages" className="text-black text-p font-customFont">
            Packages
          </a>
          <a href="/toolsPage" className="text-black text-p font-customFont">
            Tools
          </a>
        </div>
      </div>

      {/* Icons */}
      <div className="flex space-x-6 items-center">
        <a href="/shoppingcart" className="relative">
          <FiShoppingCart className="text-5xl text-black" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </a>
        <a href={user ? "/mycollection" : "/login"}>
          <CgProfile className="text-5xl text-black" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;