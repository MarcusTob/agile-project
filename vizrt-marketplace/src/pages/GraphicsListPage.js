import React, { useState } from 'react';
import FilterOptions from '../components/FilterOptions';

const GraphicsListPage = () => {
    const [filter, setFilter] = useState('');
    const [sortByPrice, setSortByPrice] = useState(null);

    // Dummy product list for demonstration
    const products = [
        { id: 1, name: 'Sci Fi Graphic', category: '3D Graphics', price: 25 },
        { id: 2, name: 'Graphic Design 2', category: 'Category 2', price: 15 },
        { id: 3, name: 'Graphic Design 3', category: '3D Graphics', price: 30 },
        { id: 4, name: 'Graphic Design 4', category: 'Category 3', price: 20 },
    ];

    // Apply filters
    let filteredProducts = products.filter(product =>
        product.category.includes(filter)
    );

    // Apply sorting
    if (sortByPrice === 'lowToHigh') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'highToLow') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="flex bg-white">
            <div >
                <FilterOptions
                    filter={filter}
                    setFilter={setFilter}
                    sortByPrice={sortByPrice}
                    setSortByPrice={setSortByPrice}
                />
            </div>
            <div className="w-3/4 p-4 bg-blue-100">
                <h2 className="text-xl font-bold mb-4">Products</h2>
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id} className="mb-2">{product.name} - ${product.price}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default GraphicsListPage;


