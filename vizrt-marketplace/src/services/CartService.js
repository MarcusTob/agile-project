const CartService = (()=> {

    const addToCart = (item) => {
    let shoppingCart = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];
    shoppingCart.push(item);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }

    const getCart = () => {
        return localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];
    }
    return{
        addToCart,
        getCart,
    }

}) ();
export default CartService;