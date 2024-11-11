import React from 'react';

import '../showcase/showcase.scss';

import phoneShowcase from '../../assets/images/illustrations/phone-showcase.svg';
import iconGoogleLight from '../../assets/images/logos/googleplay-light.svg';
import iconGoogleDark from '../../assets/images/logos/googleplay-dark.svg';
import iconAppStoreLight from '../../assets/images/logos/appstore-light.svg';
import iconAppStoreDark from '../../assets/images/logos/appstore-dark.svg';
import ShowcaseHeader from './ShowcaseHeader';
import ShowcaseContent from './ShowcaseContent';
import ShowcaseImage from './ShowcaseImage';

const Showcase = () => {
  return (
    <section className="showcase">
    <div className="container">

      <ShowcaseHeader />

      <ShowcaseContent />

      <ShowcaseImage />
      
    </div>
 </section>
  )
}

export default Showcase