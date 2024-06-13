let subscribers = [];

const CartService = {
  getCart: () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  },
  
  addToCart: (item) => {
    const cart = CartService.getCart();
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    CartService.notifySubscribers();
  },
  
  removeFromCart: (index) => {
    const cart = CartService.getCart();
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    CartService.notifySubscribers();
  },
  
  updateCart: (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    CartService.notifySubscribers();
  },
  
  placeOrder: () => {
    const cart = CartService.getCart();
    if (cart.length > 0) {
      const existingOrders = CartService.getOrders();
      const updatedOrders = [...existingOrders, ...cart];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      CartService.updateCart([]);
      CartService.notifySubscribers();
    }
  },
  
  getOrders: () => {
    const orders = localStorage.getItem("orders");
    return orders ? JSON.parse(orders) : [];
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

export default CartService;
