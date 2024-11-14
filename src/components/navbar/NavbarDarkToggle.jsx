import React from 'react'
import './navbar-dark-toggle.scss';

const NavbarDarkToggle = ({ isDarkMode, onToggle }) => (
   <div className="navbar__darkmode-toggle">
      <span className="navbar__darkmode-label">Dark Mode</span>
      <label className="navbar__darkmode-switch">
         <input
            type="checkbox"
            id="darkmode-switch"
            checked={isDarkMode}
            onChange={onToggle}
            aria-label="Toggle dark mode between light and dark themes."
         />
         <span className="navbar__darkmode-slider"></span>
      </label>
   </div>
);

export default NavbarDarkToggle