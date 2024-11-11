import React from 'react';
import '../showcase/showcase.scss';

import ShowcaseHeader from './ShowcaseHeader';
import ShowcaseContent from './ShowcaseContent';
import ShowcaseImage from './ShowcaseImage';


//============ Showcase Component ============
/*
 * The main Showcase component that structures the showcase section
 * It includes a header, content, and an image display.
 */

const Showcase = () => {
  return (
    <section className="showcase">
    <div className="container">

      {/* Showcase Header */}
      <ShowcaseHeader />
      {/* Showcase Content with text and download buttons */}
      <ShowcaseContent />
      {/* Showcase Image with app display illustration */}
      <ShowcaseImage />
      
    </div>
 </section>
  )
}

export default Showcase