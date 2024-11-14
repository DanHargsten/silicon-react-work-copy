import React, { useEffect, useState } from 'react'

import { NavbarLogo } from './NavbarLogo';
import { NavbarHamburger } from './NavbarHamburger';
import { NavbarLinks } from './NavbarLinks';
import './navbar.scss';
import NavbarDarkToggle from './NavbarDarkToggle';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => setIsOpen(!isOpen);
  

  return (
    <div className="navbar">
      <div className="container">
        <NavbarLogo />
        <NavbarLinks isOpen={isOpen} />
        <NavbarHamburger handleIsOpen={handleIsOpen} isOpen={isOpen} />
        <NavbarDarkToggle />
      </div>
    </div>
  )
}

export default Navbar