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
        <div className="flex bg-brandBgLight ">
            <div className='pl-4' >
                <FilterOptions
                    filter={filter}
                    setFilter={setFilter}
                    sortByPrice={sortByPrice}
                    setSortByPrice={setSortByPrice}
                />
            </div>
                    <ProductList products={filteredProducts} setProducts={setProducts} />
                </div>
    );
}

export default GraphicsListPage;


