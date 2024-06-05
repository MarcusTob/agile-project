let subscribers = [];
let cartApi = "http://localhost:5219/Marketplace/shoppingCart";

const CartService = {
  // Method to retrieve the cart from local storage
  getCart: () => {
    const cart = localStorage.getItem("cart");
    // If cart exists in local storage, parse and return it; otherwise, return an empty array
    return cart ? JSON.parse(cart) : [];
  },
  
  // Method to add an item to the cart
  addToCart: (item) => {
    fetch(`${cartApi}/addToCart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(data => {
      CartService.notifySubscribers();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },
  
  // Method to remove an item from the cart by index
  removeFromCart: (index) => {
    const cart = CartService.getCart(); // Retrieve current cart
    cart.splice(index, 1); // Remove item from cart at specified index
    localStorage.setItem("cart", JSON.stringify(cart)); // Update cart in local storage
    CartService.notifySubscribers();
  },
  
  // Method to update the entire cart with a new array of items
  updateCart: (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update cart in local storage
    CartService.notifySubscribers();
  },
  subscribe: (callback) => {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(subscriber => subscriber !== callback);
    };
  },
  notifySubscribers: () => {
    const cart = CartService.getCart();
    subscribers.forEach((subscriber) => subscriber(cart));
  }
};

export default CartService; // Export the CartService object
