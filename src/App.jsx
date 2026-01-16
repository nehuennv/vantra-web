import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import RestoProduct from './pages/RestoProduct';
import MedProduct from './pages/MedProduct';

function App() {
  return (
    <Router>
      <div className="bg-vantra-bg min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resto" element={<RestoProduct />} />
          <Route path="/medicos" element={<MedProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;