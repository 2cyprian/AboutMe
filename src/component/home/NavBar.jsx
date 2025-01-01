import React, { useState } from 'react';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-scroll';
import './NavBar.css';


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <a href="#home">
        <span className='logo'>Cyprian<strong>.</strong></span>
      </a>

      {/* Menu Icon */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <IoCloseSharp size={30} color='var(--secondary-100)' />
        ) : (
          <IoMenuSharp size={30} color="var(--secondary-100)" />
        )}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <button className='btn'>Hire me</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
