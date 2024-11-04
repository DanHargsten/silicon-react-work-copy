import React from 'react';

import './FeaturesData';
import './features.scss';

import { FeaturesData } from './FeaturesData';

import phoneYourCards from '../../assets/images/illustrations/phone-your-cards.svg';

const Features = () => {
   return (
      <section className="features">
         <div className="container">

            <div className="features__image">
               <img src={phoneYourCards} alt="Phone with app interface." />
            </div>

            <div className="features__heading">
               <h2 className="features__title">App Features</h2>
               <p className="features__subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>


             {/* Grid of features - each feature includes an icon, title, and description */}
            <div className="features__grid">
               {FeaturesData.map((feature, index) => (
                  <div className="feature-item" key={index}>
                     <div className="feature-item__img">
                        <img src={feature.icon} alt={`${feature.title} icon.`} />
                     </div>
                     <div>
                        <h3 className="feature-item-heading">{feature.title}</h3>
                        <p className="feature-item-subtext">{feature.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Features;