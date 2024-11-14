import { NavLink } from 'react-router-dom'
import './navbar-links.scss';

export const NavbarLinks = ({ isOpen }) => (
   <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
     <ul className="navbar__links-container">
       <li className="navbar__links-group" role="group">
         <NavLink to="/" className="navbar__link-text navbar__home">Home</NavLink>
         <NavLink to="/features" className="navbar__link-text">Features</NavLink>
         <NavLink to="/contact" className="navbar__link-text">Contact</NavLink>
       </li>
       <li>
         <a href="#" className="navbar__auth-button btn-small btn-primary">
           <span className="navbar__auth-icon"><i className='bx bx-user'></i></span>
           <span className="navbar__auth-text">Sign In / Up</span>
         </a>
       </li>
     </ul>
   </div>
 );