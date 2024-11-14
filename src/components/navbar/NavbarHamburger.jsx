import './navbar-hamburger.scss';

export const NavbarHamburger = ({ handleIsOpen, isOpen }) => (
   <div className="navbar__hamburger" onClick={handleIsOpen}>
     <button
       className={`navbar__menu-toggle ${isOpen ? 'open' : ''}`}
       aria-controls="main-menu"
       aria-expanded={isOpen}
       aria-label="Toggle navigation menu."
     >
       <span className="navbar__toggle-bar"></span>
       <span className="navbar__toggle-bar"></span>
       <span className="navbar__toggle-bar"></span>
     </button>
   </div>
 );