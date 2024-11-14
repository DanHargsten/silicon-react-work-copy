//==========================================================
// This component serves as the main navigation bar for the application.
// It includes the logo, navigation links, a hamburger menu for mobile and tablet view,
// and a toggle for dark mode.
//
// Assistance with implementing useState, useEffect, and comments for the dark mode toggle
// functionality provided by ChatGPT.
//==========================================================

import React, { useState, useEffect } from 'react'

import { NavbarDarkToggle } from './NavbarDarkToggle';
import { NavbarLogo } from './NavbarLogo';
import { NavbarHamburger } from './NavbarHamburger';
import { NavbarLinks } from './NavbarLinks';

import './navbar.scss';


const Navbar = () => {
  // State to control whether the hamburger menu is open or closed
  const [isOpen, setIsOpen] = useState(false)

  // State to track whether dark mode is enabled.
  // Initializes with a function to check `localStorage` or system preference (`prefers-color-scheme`).
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the saved theme from localStorage
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      // If a theme is found, return true if it is 'dark', otherwise false
      return storedTheme === 'dark';
    } else {
      // If no theme is found in localStorage, check the system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark; // Returns true if system preference is dark mode
    }
  });


  // Toggles the state of the menu
  const handleIsOpen = () => setIsOpen(!isOpen);


  // Toggles the dark mode state and updates the body class and localStorage.
  const handleDarkModeToggle = () => {
    // Determine the new theme based on the current state
    const newTheme = !isDarkMode ? 'dark' : 'light';
    
    // Update the state with the new theme
    setIsDarkMode(!isDarkMode);

    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);

    // Update the `dark-mode` class on the body element
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
  };


   // Runs whenever `isDarkMode` changes to apply the dark mode class and save the preference.
  useEffect(() => {
    // Toggle the `dark-mode` class on the body element based on `isDarkMode`
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // If no theme is saved in localStorage, save the current state 
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]); // Dependency array ensures this effect only runs when `isDarkMode` changes
  


  return (
    <div className="navbar">
      {/* Container for layout structure */}
      <div className="container">
        <NavbarLogo />  {/* Logo component */}
        <NavbarLinks isOpen={isOpen} />  {/* Links with active state */}
        <NavbarHamburger handleIsOpen={handleIsOpen} isOpen={isOpen} />  {/* Mobile menu toggle */}
        <NavbarDarkToggle isDarkMode={isDarkMode} onToggle={handleDarkModeToggle}/>  {/* Dark mode toggle */}
      </div>
    </div>
  )
}

export default Navbar