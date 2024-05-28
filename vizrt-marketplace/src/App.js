import react from 'react';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;