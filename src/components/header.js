import React, { useState, useRef } from 'react';
import './header.css';
import { FaBars, FaInfoCircle, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className='header-logo'>
        <Link to="/">
          <img src="https://hopkinsmedicine.org/sebin/l/w/hopkins-medicine-logo-white-header.svg" alt="Logo" />
        </Link>
      </div>

      <div className='menu'>
        <button className='menu-button' onClick={toggleMenu}>
          <FaBars />
          MENU
        </button>
      </div>

      <span className={`blank-space ${isMenuOpen ? 'blur' : ''}`}></span>

      <div className='covid'>
        <button className='covid-info'>
          <FaInfoCircle />
          COVID-19
        </button>
      </div>
      <div className='search'>
        <button className='search-text'>
          <FaSearch />
          SEARCH
        </button>
      </div>

      {isMenuOpen && (
        <div className='menu-options-container'>
          <ul className='menu-options'>
            <li><Link to=''>Home</Link></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Patient Care</a></li>
            <li><a href='#'>Health</a></li>
            <li><a href='#'>Research</a></li>
            <li><a href='#'>School of Medicine</a></li>
          </ul>
          <ul className='detail-pages'>
            <li><Link to='/myChart'>MyChart</Link></li>
            <li><Link to='/Appointments'>Schedule an Appointment</Link></li>
            <li><Link to="/Doctors">Find a Doctor</Link></li>
            <li><a href='#'>Pay Your Bill</a></li>
            <li><a href='#'>Employment</a></li>
          </ul>
        </div>
      )}
      
        </header>
  );
}

export default Header;
