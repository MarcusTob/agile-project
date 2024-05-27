import HomePage from './pages/HomePage';
import react from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
        <h1>Hello, World</h1>
    </div>
  );
}

export default App;
