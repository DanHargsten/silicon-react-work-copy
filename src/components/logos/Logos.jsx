// ==========================
// Displays a responsive grid of brand logos.
// Hides logos on mobile and adjusts the number of displayed logos 
// based on screen size.
// ==========================

import React from 'react';

import './logos.scss';

// ========== Imports: Logo Images ==========
// SVG images for each logo
import logo1 from '../../assets/images/logos/logoipsum-1.svg';
import logo2 from '../../assets/images/logos/logoipsum-2.svg';
import logo3 from '../../assets/images/logos/logoipsum-3.svg';
import logo4 from '../../assets/images/logos/logoipsum-4.svg';
import logo5 from '../../assets/images/logos/logoipsum-5.svg';
import logo6 from '../../assets/images/logos/logoipsum-6.svg';


// ========== Component: Logos ==========
const Logos = () => {
  // ========== Array: Logo Data ==========
  // Array holding logo data (src and alt) for rendering each logo image
  const logos = [
    { src: logo1, alt: "Logo for Ipsum Brand 1." },
    { src: logo2, alt: "Logo for Ipsum Brand 2." },
    { src: logo3, alt: "Logo for Ipsum Brand 3." },
    { src: logo4, alt: "Logo for Ipsum Brand 4." },
    { src: logo5, alt: "Logo for Ipsum Brand 5." },
    { src: logo6, alt: "Logo for Ipsum Brand 6." }
  ];


  // ========== Render: Logos Section ==========
  // Renders the logos section containing a grid of logos
  return (
    <section className="logos container" aria-label="Brand logos displayed in a responsive grid.">
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div className="logos__cards" key={index}> 
            <img src={logo.src} alt={logo.alt} />   
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;