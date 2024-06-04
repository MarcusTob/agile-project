

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
    },

    purchaseShoppingCart: async (userID) => {
        const apiURL = "http://localhost:5219/Marketplace/user/purchase";
        const cart = CartService.getCart();

        if(!cart.length){
            console.log("cart is empty")
            return;
        }
        const response = await fetch(`${apiURL}/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
            }
        );
        if(!response.ok){
            console.log("Failed to purchase cart")
            return;
        }
        CartService.updateCart([]);
        console.log("purchase successful");
    }

};
export default CartService;