
const CartService = {
    getCart: () => {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    },
    addToCart: (item) => {
        const cart = CartService.getCart();
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    removeFromCart: (index) => {
        const cart = CartService.getCart();
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    updateCart: (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
};

export default CartService;
