import React from 'react';

const FilterOptions = ({ filter, setFilter, sortByPrice, setSortByPrice }) => {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
                <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700">Category:</label>
                <select
                    id="categoryFilter"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    <option value="">All</option>
                    <option value="3D">3D Graphics</option>
                    <option value="Animation">Animation</option>
                </select>
            </div>
            <div>
                <label htmlFor="priceSort" className="block text-sm font-medium text-gray-700">Price:</label>
                <select
                    id="priceSort"
                    value={sortByPrice}
                    onChange={e => setSortByPrice(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    <option value="">None</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>
        </div>
    );
}

export default FilterOptions;
