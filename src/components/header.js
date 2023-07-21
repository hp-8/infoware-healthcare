import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { FaBars, FaInfoCircle, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import InfowareLogo from '../infoware-logo.webp';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== menuButtonRef.current) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={InfowareLogo} alt="Logo" className="logo-image" />
          <span className="logo-text">The InfoWare House</span>
        </Link>

        <div className="header-buttons">
          <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" className="covid-info" target="_blank">
            <button className="header-button">
              <FaInfoCircle className="header-icon" />
              COVID-19
            </button>
          </a>

          <button className="header-button search-button">
            <FaSearch className="header-icon" />
            SEARCH
          </button>

          <div className="menu" ref={menuRef}>
            <button className="header-button menu-button" onClick={toggleMenu} ref={menuButtonRef}>
              <FaBars className="header-icon" />
              MENU
            </button>

            {isMenuOpen && (
              <div className="menu-options-container">
                <div className='sec1'>

                <ul className="menu-options">
                  <li>
                    <Link to="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      Patient Care
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      Health
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      School of Medicine
                    </a>
                  </li>
                </ul>
                  
                </div>

                <div className='sec2'>
                <ul className="detail-pages">
                  <li>
                    <Link to="/myChart" onClick={toggleMenu}>
                      MyChart
                    </Link>
                  </li>
                  <li>
                    <Link to="/Appointments" onClick={toggleMenu}>
                      Schedule an Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="/Doctors" onClick={toggleMenu}>
                      Find a Doctor
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      Pay Your Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>
                      Employment
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
