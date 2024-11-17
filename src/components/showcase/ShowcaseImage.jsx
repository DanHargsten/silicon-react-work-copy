// ==========================================
// Showcase Image Component
// Displays the main image for the showcase section.
// ==========================================
import React from 'react';

import './showcase-image.scss'

import phoneShowcase from '../../assets/images/illustrations/phone-showcase.svg';


const ShowcaseImage = () => (
  <div className="showcase__image">
    <img
      src={phoneShowcase}
      alt="Two phones showing off Silicon app features with a graph and cards"
    />
  </div>
);

export default ShowcaseImage;