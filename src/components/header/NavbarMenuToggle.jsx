import React from 'react';
import './navbar-menu-toggle.scss';

const NavbarMenuToggle = ({ isOpen, onClick }) => {
  return (
    <button
      className={`navbar__menu-toggle ${isOpen ? 'open' : ''}`}
      aria-controls="main-menu"
      aria-expanded={isOpen}
      aria-label="Toggle navigation menu."
      onClick={onClick}
    >

      <span className="navbar__toggle-bar"></span>
      <span className="navbar__toggle-bar"></span>
      <span className="navbar__toggle-bar"></span>
    </button>
  )
};

export default NavbarMenuToggle;