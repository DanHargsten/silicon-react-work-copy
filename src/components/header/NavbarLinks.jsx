import React from 'react';
import './navbar-links.scss';

const NavbarLinks = () => {
   return (
      <ul id="main-menu" className="main-menu hide">
         <li className="navbar-container">
            <a href="#" className="navbar__link">Features</a>
            <a href="#" className="navbar__link">Contact</a>
         </li>
         <li>
            <a href="#" className="navbar__link--action navbar__link-button">
               <i className="fa-regular fa-user"></i>
               <span>Sign in / up</span>
            </a>
         </li>
      </ul>
   )
};

export default NavbarLinks