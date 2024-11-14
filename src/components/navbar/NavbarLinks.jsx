// NavbarLinks.jsx
//==========================================================
// This component displays the navigation links for the application.
// It supports an active state for mobile and tablet view.
//==========================================================

import { NavLink } from 'react-router-dom'
import './navbar-links.scss';

export const NavbarLinks = ({ isOpen }) => (
   <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
     <ul className="navbar__links-container">
      
      {/* Navigation links */}
       <li className="navbar__links-group" role="group">
         <NavLink to="/" className="navbar__link-text navbar__home">Home</NavLink>
         <NavLink to="/features" className="navbar__link-text">Features</NavLink>
         <NavLink to="/contact" className="navbar__link-text">Contact</NavLink>
       </li>
       
       {/* Authentication button */}
       <li>
         <a href="#" className="navbar__auth-button btn-small btn-primary">
           <span className="navbar__auth-icon"><i className='bx bx-user'></i></span>
           <span className="navbar__auth-text">Sign In / Up</span>
         </a>
       </li>

     </ul>
   </div>
 );