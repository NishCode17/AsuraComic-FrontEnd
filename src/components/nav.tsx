import './styles.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { FaHome, FaBookOpen, FaBookmark, FaSignInAlt } from "react-icons/fa";


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="Brand Logo" className="logo" />
        </a>
        
        <ul className="nav-links">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Bookmarks</a></li>
          <li><a href="#" className="nav-link">Comics</a></li>
        </ul>

        {/* Mobile view search button, shown only on small screens */}
        

        {/* Search box with icon inside, only visible when toggled */}
        <form className={`search-form ${searchOpen ? 'open' : ''}`}>
          <input type="text" placeholder="Search Comics" className="search-input" />
          {/* Search button inside the search input */}
          <button type="submit" className="search-btn" aria-label="Search">
            <FaSearch />
          </button>
        </form>

        <button className="search-toggle-btn" onClick={toggleSearch}>
            {searchOpen ? "✕" : <FaSearch />}
          </button>

        {/* Mobile view login button */}
        <button className="login-btn"><a href="/">Login</a></button>

        {/* Menu Button for mobile */}
        <button className="menu-btn" onClick={toggleMenu} aria-label="Open Menu">☰</button>

        {/* Side Menu */}
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <span className="close-btn" onClick={toggleMenu} aria-label="Close Menu">×</span>
          <ul>
            <li><a href="#"><FaHome /> Home</a></li>
            <li><a href="#"><FaBookOpen /> Comics</a></li>
            <li><a href="#"><FaBookmark /> Bookmarks</a></li>
            <li><a href="#">Login <FaSignInAlt /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
