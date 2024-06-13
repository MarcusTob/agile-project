import GraphicsListPage from "./pages/GraphicsListPage";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import PackagesListPage from "./pages/PackagesListPage";
import PackagePage from "./pages/PackagePage";
import SellingUploadPage from "./pages/SellingUploadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import MyListings from "./pages/MyListings";
import MyCollectionPage from "./pages/MyCollectionPage";
import OrderComplete from "./pages/OrderComplete";
import EditListingPage from "./pages/EditListingPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/graphics" element={<GraphicsListPage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/packages" element={<PackagesListPage />} />
          <Route path="/package/:id" element={<PackagePage />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route path="/mycollection" element={<MyCollectionPage />} />
          <Route path="/listings" element={<MyListings />} />
          <Route path="/sellingUpload" element={<SellingUploadPage />} />
          <Route path="/editListing/:id" element={<EditListingPage />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
