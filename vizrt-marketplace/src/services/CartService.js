let subscribers = [];

const CartService = {
  //gets cart from localstorage
  getCart: () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  },
  //adds item to cart, in local storage
  addToCart: (item) => {
    const cart = CartService.getCart();
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    CartService.notifySubscribers();
  },
  //removes item from cart
  removeFromCart: (index) => {
    const cart = CartService.getCart();
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    CartService.notifySubscribers();
  },
  //updates cart
  updateCart: (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    CartService.notifySubscribers();
  },
  //moves items from cart, to orders (mycollection)
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
  //gets items from orders (mycollection)
  getOrders: () => {
    const orders = localStorage.getItem("orders");
    return orders ? JSON.parse(orders) : [];
  },
  //subscribes to cart changes
  subscribe: (callback) => {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(subscriber => subscriber !== callback);
    };
  },
  //notifies subscribers of cart changes
  notifySubscribers: () => {
    const cart = CartService.getCart();
    subscribers.forEach((subscriber) => subscriber(cart));
  }
};

export default CartService;
