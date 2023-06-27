import './header.css';
import { FaBars, FaInfoCircle, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className='header-logo'>
        <a href=''>
          <img src="https://hopkinsmedicine.org/sebin/l/w/hopkins-medicine-logo-white-header.svg" alt="Logo" />
        </a>
      </div>

      <div className='menu'>
        <button className='menu-button'>
          <FaBars />
          MENU
        </button>
      </div>

      <span className='blank-space'></span>

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
    </header>
  );
}

export default Header;
