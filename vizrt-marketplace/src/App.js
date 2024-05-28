import react from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import GraphicsListPage from './pages/GraphicsListPage';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/GraphicsListPage" element={<GraphicsListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;