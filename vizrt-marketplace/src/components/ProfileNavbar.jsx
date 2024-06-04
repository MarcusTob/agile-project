import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const ProfileNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-brandBg text-brandOrange px-6 py-4">
      <div className="flex space-x-8">
        <Link to="/my-collection" className="text-2xl font-bold">
          My Collection
        </Link>
        <Link to="/my-listings" className="text-2xl font-bold">
          My Listings
        </Link>
      </div>
      <div>
        <Link to="/logout" className="text-2xl font-bold">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavbar;
