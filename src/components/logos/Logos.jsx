import React from 'react';
import './logos.scss';  // Styling for the Logos component

// Import logo images
import logo1 from '../../assets/images/logos/logoipsum-1.svg';
import logo2 from '../../assets/images/logos/logoipsum-2.svg';
import logo3 from '../../assets/images/logos/logoipsum-3.svg';
import logo4 from '../../assets/images/logos/logoipsum-4.svg';
import logo5 from '../../assets/images/logos/logoipsum-5.svg';
import logo6 from '../../assets/images/logos/logoipsum-6.svg';


const Logos = () => {

  // Array of logo objects with `src` and `alt` properties
  const logos = [
    { src: logo1, alt: "Logo for Ipsum Brand 1." },
    { src: logo2, alt: "Logo for Ipsum Brand 2." },
    { src: logo3, alt: "Logo for Ipsum Brand 3." },
    { src: logo4, alt: "Logo for Ipsum Brand 4." },
    { src: logo5, alt: "Logo for Ipsum Brand 5." },
    { src: logo6, alt: "Logo for Ipsum Brand 6." }
  ];


  return (
    <section className="logos" aria-label="Brand logos.">
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div className="logos__cards" key="index">  {/*Each logo is wrapped in a div*/}
            <img src={logo.src} alt={logo.alt} />   {/* Display each logo as an img */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Logos;