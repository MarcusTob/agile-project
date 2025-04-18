import React, { useState, useEffect } from "react";

// FilterOptions component accepts products and setFilteredProducts as props
const FilterOptions = ({ products, setFilteredProducts }) => {
  // State to store the selected filter category
  const [filter, setFilter] = useState("");
  // State to store the selected price sorting option
  const [sortByPrice, setSortByPrice] = useState("");

  // useEffect to apply filters and sorting whenever filter, sortByPrice, or products change
  useEffect(() => {
    // category filter
    let filteredProducts = products.filter((product) =>
      product.category.includes(filter)
    );

    //price sorting
    if (sortByPrice === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Updates the filtered products state in parent component
    setFilteredProducts(filteredProducts);
  }, [filter, sortByPrice, products, setFilteredProducts]);

  return (
    <div
      className="mb-4 bg-white p-6 shadow-md rounded-md"
      style={{ marginLeft: "20px", marginTop: "20px" }}
    >
      <p className="text-p font-customFont font-bold mb-4 text-black">Filters</p>
      <div className="mb-4">
        <label
          htmlFor="categoryFilter"
          className="block text-p3 font-customFont text-gray"
        >
          Category:
        </label>
        <select
          id="categoryFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {/* Filter options for product categories */}
          <option value="">All</option>
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
          className="block text-p3 font-customFont text-gray"
        >
          Price:
        </label>
        <select
          id="priceSort"
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {/* Sorting options for prices */}
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
