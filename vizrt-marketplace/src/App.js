import './App.css';
import GraphicsListPage from './pages/GraphicsListPage';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';
import PackagesListPage from './pages/PackagesListPage';
import PackagePage from './pages/PackagePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/graphics" element={<GraphicsListPage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/packages" element={<PackagesListPage />} />
          <Route path="/package/:id" element={<PackagePage />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;