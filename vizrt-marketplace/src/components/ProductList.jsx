import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <ProductItem key={product.ProductID} product={product} />
            ))}
        </div>
    )
}
export default ProductList;