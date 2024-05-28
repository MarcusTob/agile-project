const ProductItem = ({ product }) => {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Specifications: {product.specifications}</p>
            <p>Creator: {product.creator}</p>
            <p>{product.nrOfReviews} Reviews</p>
            <p>{product.rating}/5</p>          
        </div>
    )
}
export default ProductItem;