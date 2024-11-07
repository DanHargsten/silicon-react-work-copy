import React from 'react';
import './navbar-links.scss';

const NavbarLinks = () => {
   return (
      <ul className="navbar__links-container">
         <div className="navbar__links-group">
            <li className="navbar__link">
               <a href="#">
                  <span className="navbar__link-text">Features</span>
               </a>
            </li>
            <li className="navbar__link">
               <a href="#">
                  <span className="navbar__link-text">Contact</span>
               </a>
            </li>
         </div>

         <li>
            <a href="#" className="navbar__auth-button btn-small btn-primary">
               <span className="navbar__auth-icon"><i className='bx bx-user'></i></span>
               <span className="navbar__auth-text">Sign In / Up</span>
            </a>
         </li>
      </ul>
   )
};

export default NavbarLinks