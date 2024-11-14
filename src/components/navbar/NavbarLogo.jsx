// NavbarLogo.jsx
//==========================================================
// This component renders the logo for the application.
// It includes an image and the application name.
//==========================================================

import './navbar-logo.scss';
import siliconLogo from '../../assets/images/logos/silicon-logo.svg'

export const NavbarLogo = () => (
   <a className="navbar__logo" href="/">
     <img src={siliconLogo} className="navbar__logo-img" alt="Silicon logotype. Return to homepage." />
     <span className="navbar__logo-name">Silicon</span>
   </a>
 );