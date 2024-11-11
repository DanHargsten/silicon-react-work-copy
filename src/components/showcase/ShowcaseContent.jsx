import React from 'react';
import './showcase-content.scss'

import iconGoogleLight from '../../assets/images/logos/googleplay-light.svg';
import iconGoogleDark from '../../assets/images/logos/googleplay-dark.svg';
import iconAppStoreLight from '../../assets/images/logos/appstore-light.svg';
import iconAppStoreDark from '../../assets/images/logos/appstore-dark.svg';


//============ Showcase Content Component ============
/*
 * Component for displaying the showcase content, including promotional text and download buttons.
 */

const ShowcaseContent = () => (
  <div className="showcase__content">
    {/* Main promotional text */}
    <p className="showcase__content-text">
      We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
    </p>

    {/* Download buttons for App Store and Google Play */}
    <div className="showcase__buttons">
      <a href="#" className="btn-market btn--app-store">
        <img className="button--light" src={iconAppStoreLight} alt="Download on the App Store." />
        <img className="button--dark" src={iconAppStoreDark} alt="Download on the App Store." />
      </a>
      <a href="#" className="btn-market btn--google-play">
        <img className="button--light" src={iconGoogleLight} alt="Get it on Google Play." />
        <img className="button--dark" src={iconGoogleDark} alt="Get it on Google Play." />
      </a>
    </div>

    {/* "Discover more" button */}
    <div className="showcase__more">
      <a href="#" className="btn-circle">
        <i className="bx bx-chevron-down"></i>
      </a>
      <span className="showcase__more-text">Discover more</span>
    </div>
  </div>
);

export default ShowcaseContent;