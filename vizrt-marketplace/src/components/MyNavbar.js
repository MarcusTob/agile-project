import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    console.log('User logged out');
    navigate('/login'); // Redirect to login page or homepage
  };

  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex space-x-8">
        <NavLink
          to="/mycollection"
          className={({ isActive }) =>
            isActive ? "underline text-black text-lg font-semibold" : "text-black text-lg font-semibold"
          }
        >
          My Collection
        </NavLink>
        <NavLink
          to="/listings"
          className={({ isActive }) =>
            isActive ? "underline text-black text-lg font-semibold" : "text-black text-lg font-semibold"
          }
        >
          My Listings
        </NavLink>
      </div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default MyNavbar;
