import React from 'react';
import './App.css';
import DashboardPage from './Screens/Pages/DashboardPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Screens/Pages/Home';
import Services from './Screens/Pages/Services';
import About from './Screens/Pages/About';
import Portfolio from './Screens/Pages/Portfolio';
import Contact from './Screens/Pages/Contact';

function App() {
  return (
    <Router>
      <DashboardPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={< About/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add About, Portfolio, Contact routes */}
        </Routes>
      </DashboardPage>
    </Router>
  );
}

export default App;
