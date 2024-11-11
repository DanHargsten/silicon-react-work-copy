import React from 'react';

import './showcase-image.scss'

import phoneShowcase from '../../assets/images/illustrations/phone-showcase.svg';

/**
 * Component for displaying the main image in the showcase section.
 */
const ShowcaseImage = () => (
  <div className="showcase__image">
    <img src={phoneShowcase} alt="Two phones showing off Silicon app features with a graph and cards" />
  </div>
);

export default ShowcaseImage;