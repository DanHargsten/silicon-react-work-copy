import React from 'react';

import '../showcase/showcase.scss';

import ShowcaseHeader from './ShowcaseHeader';
import ShowcaseContent from './ShowcaseContent';
import ShowcaseImage from './ShowcaseImage';

const handleDiscoverScroll = () => {
  const sliderSection = document.getElementById('slider');
  if (sliderSection) {
    sliderSection.scrollIntoView({ behavior: 'smooth' });
  }
};



const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
      <div className="container">
        <ShowcaseHeader />
        <ShowcaseContent onDiscoverClick={handleDiscoverScroll}/>
        <ShowcaseImage />      
    </div>
  </section>
  )
}

export default Showcase