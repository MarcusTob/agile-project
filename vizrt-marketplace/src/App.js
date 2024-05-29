import react from 'react';
import './App.css';
import GraphicsListPage from './pages/GraphicsListPage';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/graphics" element={<GraphicsListPage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          {/* <Home/>
          <ProductPage /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;