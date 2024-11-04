import React from 'react';

import siliconLogo from '../../assets/images/logos/silicon-logo.svg'

import './navbar-logo.scss';

const NavbarLogo = () => {
   return (
      <a className="navbar__logo" href="/">
         <img src={siliconLogo} className="navbar__logo-img" alt="Silicon logotype. Return to homepage." />
         <span className="navbar__logo-name">Silicon</span>
      </a>
   )
}

export default NavbarLogo