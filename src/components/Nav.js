import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">Zaxkyy Workshop</div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/produk' ? 'active' : ''}>
          <Link to="/produk">Produk</Link>
        </li>
        <li className={location.pathname === '/kategori' ? 'active' : ''}>
          <Link to="/kategori">Kategori</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
