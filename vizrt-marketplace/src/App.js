import react from 'react';
import './App.css';
import GraphicsListPage from './pages/GraphicsListPage';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from './pages/ProductPage';



function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          {/* <Home/>
          <ProductPage /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;