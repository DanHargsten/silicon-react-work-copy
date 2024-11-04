import React from 'react';
import './features-extended.scss';

import phoneTransfer from '../../assets/images/illustrations/fte-simple-transfer.svg';
import phoneContacts from '../../assets/images/illustrations/fte-contacts.svg';
import iconEasy from '../../assets/images/icons/ft-easy-payments.svg';
import iconCashback from '../../assets/images/icons/ft-regular-cashback.svg';


const FeaturesExtended = () => {
  return (
    <section className="features-extended">
    <div className="container">


       <div className="features-extended__container">
          <div className="features-extended__info">
             <h2 className="features-extended__title">Make your money transfer simple and clear</h2>
             <ul className="features-extended__list">           
               <li>Banking transactions are free for you</li>         
               <li>No monthly cash commission</li>
               <li>Manage payments and transactions online</li>
             </ul>
             <a href="#" className="btn-medium btn-primary" aria-label="Learn more about managing payments.">
                Learn more<span><i class='bx bx-right-arrow-alt'></i></span>
             </a>               
          </div>

          <div className="features-extended__image">
             <img src={phoneTransfer} alt="A line graph showing a fluctuating balance over time." />
          </div>
       </div>


       <div className="features-extended__container">
          <div className="features-extended__image">
             <img src={phoneContacts} alt="Shows a list of contacts with avatars, names and brief messages, and a floating card in front displaying a balance." />
          </div>

          <div className="features-extended__info">
             <h2 className="features-extended__title">Receive payment from international bank details</h2>               
             <div className="features-extended__icons">
                <div className="icon-block">
                   <div className="icon-block-image">
                      <img src={iconEasy} alt="" />
                   </div>
                   <p className="features-extended__description">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>

                <div className="icon-block">
                   <div className="icon-block-image">
                      <img src={iconCashback} alt="" />
                   </div>
                   <p className="features-extended__description">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
             </div>
             <a href="#" className="btn-medium btn-primary" aria-label="Learn more about receiving international payments.">
                Learn more<span><i class='bx bx-right-arrow-alt'></i></span>
             </a>
          </div>
       </div>

    </div>
 </section>
  )
}

export default FeaturesExtended;