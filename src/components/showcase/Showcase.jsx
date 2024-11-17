// ==========================================
// Showcase Component
// Renders the main showcase section of the app, including the header,
// content with download buttons, and the showcase image.
// Provides an interactive scroll to the slider section.
//
// Assistance to handle scrolling by ChatGPT  
// ==========================================
import React from 'react';

import '../showcase/showcase.scss';

import ShowcaseHeader from './ShowcaseHeader';
import ShowcaseContent from './ShowcaseContent';
import ShowcaseImage from './ShowcaseImage';

// Scrolls smoothly to the slider section when "Discover more" is clicked
const handleDiscoverScroll = () => {
  const sliderSection = document.getElementById('slider');
  if (sliderSection) {
    sliderSection.scrollIntoView({ behavior: 'smooth' });
  }
};



const Showcase = () => (
  <section aria-label="Showcase section displaying app features and download options" className="showcase">
    <div className="container">
      <ShowcaseHeader />
      <ShowcaseContent onDiscoverClick={handleDiscoverScroll}/>
      <ShowcaseImage />      
    </div>
  </section>  
);

export default Showcase;