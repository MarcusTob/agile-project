import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className= "flex flex-col items-center bg-red-800 py-5 rounded-lg">
            {products.map(product => (
                <ProductItem key={product.ProductID} product={product} />
            ))}
        </div>
    )
}
export default ProductList;