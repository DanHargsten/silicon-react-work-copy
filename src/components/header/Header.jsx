import React, { useEffect, useState } from 'react';

import NavbarDarkToggle from './NavbarDarkToggle';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import NavbarMenuToggle from './NavbarMenuToggle';


import './header.scss';


const Header = () => {
  // Tracks whether the menu is open or closed
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle the menu open/close state
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  // Tracks if dark mode is active or not
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Toggles the dark mode state when the user clicks the dark mode button
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);



  // Checks user's system preference for dark mode on initial page load
  // useEffect(() => {
  //   // Checks if the user has dark mode set in system preferences
  //   const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setIsDarkMode(userPrefersDark);

  //   // Adds or removes 'dark-mode' class on body based on preference
  //   if (userPrefersDark) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, []);  // Runs only once when the component mounts



  // // Listens for changes to the user's system preference for dark mode
  // useEffect(() => {
  //   // Creates a media query to monitor changes to the system's dark mode setting
  //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   // Updates {isDarkMode} when the system's dark mode preference changes
  //   const handleChange = (e) => setIsDarkMode(e.matches);

  //   // Adds the event listener for system preference changes
  //   mediaQuery.addEventListener('change', handleChange);
  //   // Cleanup: removes the event listener when the component unmounts
  //   return () => mediaQuery.removeEventListener('change', handleChange);
  // }, []); // Runs only once when the component mounts, but the listener remains active



  // Updates the 'dark-mode' class on the body whenever {isDarkMode} changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);  // Runs whenever {isDarkMode} changes



  // useEffect(() => {
  //   const mainMenu = document.querySelector('.main-menu');

  //   if (!mainMenu) return;

  //   if (isMenuOpen) {
  //     mainMenu.classList.remove('hide');
  //     mainMenu.style.animation = 'openMenu 300ms forwards';
  //   } else {
  //     mainMenu.style.animation = 'closeMenu 300ms forwards';
  //     // mainMenu.addEventListener('animationend', () => {
  //     //   mainMenu.classList.add('hide');        
  //     // }, { once: true });
  //     //
  //     const hideMenu = () => {
  //       mainMenu.classList.add('hide');
  //       mainMenu.removeEventListener('animationend', hideMenu);
  //       setTimeout(hideMenu, 300);
  //     }
  //     //
  //   }
  // }, [isMenuOpen]);


  return (
    <nav className="navbar">
      <a href="#" className="skip-link">Skip to main content</a>
      <div className="container">
        <NavbarLogo />
        {/* <NavbarMenuToggle isOpen={isMenuOpen} onClick={toggleMenu} /> */}
        {/* {isMenuOpen && <NavbarLinks />} */}
        <NavbarLinks />
        <NavbarDarkToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>
    </nav>
  )
}

export default Header