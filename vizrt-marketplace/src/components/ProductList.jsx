import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className="grid-template-columns: repeat(2, minmax(0, 1fr))">
            {products.map(product => (
                <ProductItem key={product.ProductID} product={product} />
            ))}
        </div>
    )
}
export default ProductList;