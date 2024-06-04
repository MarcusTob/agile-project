import React, { useState, useEffect } from "react";

const FilterOptions = ({ products, setFilteredProducts }) => {
  const [filter, setFilter] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  useEffect(() => {
    // Apply filters
    let filteredProducts = products.filter((product) =>
      product.category.includes(filter)
    );

    // Apply sorting
    if (sortByPrice === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Update the filtered products state in parent component
    setFilteredProducts(filteredProducts);
  }, [filter, sortByPrice, products, setFilteredProducts]);

  return (
    <div
      className="mb-4 bg-white p-6 shadow-md rounded-md"
      style={{ marginLeft: "20px", marginTop: "20px" }}
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900">Filters</h2>
      <div className="mb-4">
        <label
          htmlFor="categoryFilter"
          className="block text-sm font-medium text-gray"
        >
          Category:
        </label>
        <select
          id="categoryFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All</option>
          <option value="3D">3D Graphics</option>
          <option value="Animation">Animation</option>
          <option value="News">News</option>
          <option value="Weather">Weather</option>
          <option value="Sports">Sports</option>
          <option value="Election">Election</option>
          <option value="Corporate">Corporate</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Financial">Financial</option>
          <option value="Esports">Esports</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="priceSort"
          className="block text-sm font-medium text-gray"
        >
          Price:
        </label>
        <select
          id="priceSort"
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
