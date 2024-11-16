// NavbarLinks.jsx
//==========================================================
// This component displays the navigation links for the application.
// It supports an active state for mobile and tablet view.
//==========================================================

import { NavLink, useNavigate } from 'react-router-dom'
import './navbar-links.scss';

export const NavbarLinks = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const element = document.getElementById("features");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "features" } });
    }
  };



  return (
   <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
     <ul className="navbar__links-container">
      
      {/* Navigation links */}
       <li className="navbar__links-group" role="group">
         
         <NavLink to="/" className="navbar__link-text navbar__home">Home</NavLink>
         <a
          href="#features"
          onClick={handleFeaturesClick}
          className="navbar__link-text"
          >
            Features            
        </a>

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
};







 // import { NavLink } from 'react-router-dom'
// import './navbar-links.scss';

// export const NavbarLinks = ({ isOpen }) => (
//    <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
//      <ul className="navbar__links-container">
      
//       {/* Navigation links */}
//        <li className="navbar__links-group" role="group">
//          <NavLink to="/" className="navbar__link-text navbar__home">Home</NavLink>
//          <NavLink to="/features" className="navbar__link-text">Features</NavLink>
//          <NavLink to="/contact" className="navbar__link-text">Contact</NavLink>
//        </li>
       
//        {/* Authentication button */}
//        <li>
//          <a href="#" className="navbar__auth-button btn-small btn-primary">
//            <span className="navbar__auth-icon"><i className='bx bx-user'></i></span>
//            <span className="navbar__auth-text">Sign In / Up</span>
//          </a>
//        </li>

//      </ul>
//    </div>
//  );