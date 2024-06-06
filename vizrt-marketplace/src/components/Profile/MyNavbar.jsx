import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    // Perform logout logic here
    console.log("User logged out");
    // Redirect to login page
    navigate("/login");
  };

  return (
    // Navbar container with background color, padding, shadow, and flex properties
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      {/* Navigation links container with space between items */}
      <div className="flex space-x-8">
        {/* NavLink to /mycollection */}
        <NavLink
          to="/mycollection"
          className={({ isActive }) =>
            isActive
              ? "underline text-black text-p font-customFont font-semibold"
              : "text-black text-p font-customFont font-semibold"
          }
        >
          My Collection
        </NavLink>
        {/* NavLink to /listings */}
        <NavLink
          to="/listings"
          className={({ isActive }) =>
            isActive
              ? "underline text-black text-p font-customFont font-semibold"
              : "text-black text-p font-customFont font-semibold"
          }
        >
          My Listings
        </NavLink>
      </div>
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-p font-customFont"
      >
        Logout
      </button>
    </div>
  );
};

export default MyNavbar;
