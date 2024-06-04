import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import '../index.css';
import 'tailwindcss/tailwind.css';
import { useContext } from "react";
import UserContext from "../UserContext";

const Navbar = ({
  logoLogo = "https://c.animaapp.com/2XehKRee/img/logo-2@2x.png",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {user, setUser} = useContext(UserContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logoLogo} alt="Vizrt Logo" className="w-32 h-auto object-cover" />
      </a>

      {/* Search Bar and Links */}
      <div className="flex flex-col items-left w-1/2">
        <div className="border-2 border-solid border-gray-600 flex items-center w-full gap-2 p-2 rounded-md bg-white">
          <img
            className="w-6 h-6"
            alt="Search"
            src="https://c.animaapp.com/2XehKRee/img/search-1.svg"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
            className="flex-1 text-gray-600 bg-transparent outline-none"
          />
        </div>
        <div className="flex space-x-8 mt-2 start-end">
          <a href="/graphics" className="text-black text-xl font-medium">Graphics</a>
          <a href="/packages" className="text-black text-xl font-medium">Packages</a>
          <a href="/tools" className="text-black text-xl font-medium">Tools</a>
        </div>
      </div>


      {/* Icons */}
      <div className="flex space-x-6 items-center">
      <a href="/shoppingcart"><FiShoppingCart className="text-5xl text-black" /></a>
      <a href={user ? "/collection" : "/login"}><CgProfile className="text-5xl text-black" /></a>
      </div>
    </div>
  );
};

export default Navbar;
