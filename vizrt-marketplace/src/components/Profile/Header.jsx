import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { CiFilter } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Header = ({ products, setFilteredProducts }) => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to manage the visibility of the search box
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  // State to manage the visibility of the filter box
  const [isFilterBoxVisible, setIsFilterBoxVisible] = useState(false);

  // Toggles the visibility of the filter box
  const handleFilterClick = () => {
    setIsFilterBoxVisible(!isFilterBoxVisible);
  };

  // Toggles the visibility of the search box
  const handleSearchClick = () => {
    setIsSearchBoxVisible(!isSearchBoxVisible);
  };

  // Update search query and filter products as user types
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filters products based on the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  // Apply filter based on the selected filter type
  const applyFilter = (filterType) => {
    let filteredProducts = [...products];
    switch (filterType) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(filteredProducts);
    setIsFilterBoxVisible(false);
  };

  return (
    <div className="relative w-full mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center relative">
          <button
            onClick={handleFilterClick}
            className="bg-white rounded-[30px] w-[54px] h-[43px] flex items-center justify-center mr-4"
          >
            <CiFilter className="text-black text-2xl" />
          </button>
          {isFilterBoxVisible && (
            <div className="absolute top-full mt-2 bg-white p-2 rounded-lg shadow-lg z-10 w-[200px]">
              <button
                onClick={() => applyFilter("price-asc")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 text-p3 font-customFont"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => applyFilter("price-desc")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 text-p3 font-customFont"
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center">
        <Link to="/sellingUpload">
           <button className="bg-white hover:bg-blue-700 text-black font-bold text-p3 font-customFont py-2 px-4 rounded-full mr-4">
               Create new listings
           </button>
        </Link>
          <div className="relative">
            <button
              onClick={handleSearchClick}
              className="w-[52px] h-[42px] bg-white rounded-[20px] flex items-center justify-center"
            >
              <IoIosSearch className="text-black text-2xl" />
            </button>
            {isSearchBoxVisible && (
              <div
                className="absolute right-0 mt-2 bg-white p-4 rounded-lg shadow-lg z-10"
                style={{ width: "300px", left: "-250px" }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Type to search"
                  className="border p-2 rounded w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
