import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-yellow-400 p-4 shadow-md">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Do-Sang Chips</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-700">Tentang</Link></li>
        <li><Link to="/catalog" className="hover:text-gray-700">E-Katalog</Link></li>
        <li><Link to="/contact" className="hover:text-gray-700">Hubungi</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
