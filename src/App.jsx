import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <main className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer/>
  </Router>
);

export default App;
