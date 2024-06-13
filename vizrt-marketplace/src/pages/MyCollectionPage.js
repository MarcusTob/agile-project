import React, { useEffect, useState } from "react";
import CollectionList from "../components/Profile/CollectionList";
import MyNavbar from "../components/Profile/MyNavbar";
import CartService from "../services/CartService";

const MyCollectionPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = CartService.getOrders();
    setOrders(storedOrders);
  }, []);

  return (
    <div className="bg-brandBgLight min-h-screen">
      <MyNavbar />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-screen-xl">
          <CollectionList products={orders} />
        </div>
      </div>
    </div>
  );
};

export default MyCollectionPage;
