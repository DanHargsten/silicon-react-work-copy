/*
 * =================== FeaturesExtended Component ===================
 * This component displays an extended features section, highlighting key
 * features of the app related to money transfers and international payments.
 * Each feature block contains:
 * - A heading describing the feature.
 * - An informational list or icon features related to the section.
 */

import React from 'react';
import './features-extended.scss';

// Importing illustrations and icons
import phoneTransfer from '../../assets/images/illustrations/fte-simple-transfer.svg';
import phoneContacts from '../../assets/images/illustrations/fte-contacts.svg';
import iconEasy from '../../assets/images/icons/ft-easy-payments.svg';
import iconCashback from '../../assets/images/icons/ft-regular-cashback.svg';


const FeaturesExtended = () => {
  return (
    <section className="features-extended">
    <div className="container">


       {/* ========================== Feature Block 1 ========================== */}
       <div className="features-extended__container">
          <div className="features-extended__info">
             <h2 className="features-extended__title">Make your money transfer simple and clear</h2>

             <ul className="features-extended__list" aria-label="Benefits of simple and clear money transfers">           
               <li>Banking transactions are free for you</li>         
               <li>No monthly cash commission</li>
               <li>Manage payments and transactions online</li>
             </ul>

             <a href="#" role="button" className="btn-medium btn-primary" aria-label="Learn more about managing payments and online transactions.">
                Learn more<span><i className='bx bx-right-arrow-alt'></i></span>
             </a>               
          </div>

          <div className="features-extended__image">
             <img src={phoneTransfer} alt="A line graph showing a fluctuating balance over time." />
          </div>
       </div>


       {/* ========================== Feature Block 2 ========================== */}
       <div className="features-extended__container">
          <div className="features-extended__image">
             <img src={phoneContacts} alt="Shows a list of contacts with avatars, names and brief messages, and a floating card in front displaying a balance." />
          </div>

          <div className="features-extended__info">
             <h2 className="features-extended__title">Receive payment from international bank details</h2>               
             <div className="features-extended__icons">
                <div className="icon-block">
                   <div className="icon-block-image" role="img" aria-label="Easy payments feature.">
                      <img src={iconEasy} alt="" aria-hidden="true" />
                   </div>
                   <p className="features-extended__description">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>

                <div className="icon-block">
                   <div className="icon-block-image" role="img" aria-label="Cashback benefits feature.">
                      <img src={iconCashback} alt="" aria-hidden="true" />
                   </div>
                   <p className="features-extended__description">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
             </div>
             
             <a href="#" role="button" className="btn-medium btn-primary" aria-label="Learn more about receiving international payments.">
                Learn more<span><i className='bx bx-right-arrow-alt'></i></span>
             </a>
          </div>
       </div>

    </div>
 </section>
  )
}

export default FeaturesExtended;