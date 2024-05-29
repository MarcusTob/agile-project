import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2">
            {products.map(product => (
                <ProductItem key={product.ProductID} product={product} />
            ))}
        </div>
    )
}

export default ProductList;
