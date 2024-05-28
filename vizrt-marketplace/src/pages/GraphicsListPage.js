import React, { useEffect, useState } from 'react';
import FilterOptions from '../components/FilterOptions';
import ProductList from '../components/ProductList';
import ProductService from '../services/ProductService';

const GraphicsListPage = () => {
    const [filter, setFilter] = useState('');
    const [sortByPrice, setSortByPrice] = useState(null);
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const response = await ProductService.getAllProducts();
        setProducts(response);
        console.log(response);
    }

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

    useEffect(() => {
        getAllProducts();
    }, []);

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
                {/* <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id} className="mb-2">{product.name} - ${product.price}</li>
                    ))}
                </ul> */}
                <div>
                    <ProductList products={filteredProducts} setProducts={setProducts} />
                </div>
            </div>
        </div>
    );
}

export default GraphicsListPage;


