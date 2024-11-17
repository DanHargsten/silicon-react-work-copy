// ===========================================
// FaqContact Component
// Renders a contact section for users who still need help after reading FAQs.
// Includes a mobile contact button and desktop/tablet contact boxes.
// ===========================================

import React from 'react';
import './faq-contact.scss';

import contactPhone from '../../assets/images/icons/contact-phone.svg';
import contactText from '../../assets/images/icons/contact-text.svg';


const FaqContact = () => {
  return (
   <div className="faq__contact">

      {/* Mobile button, only vissible on mobile */}
      <div className="faq__contact-mobile">
         <a className="contact__btn btn-medium btn-primary" href="#" aria-label="Contact us via mobile">
            Contact us now
         </a>
      </div>
      
      {/* Tablet/Desktop boxes */}
      <div className="faq__contact-tablet">
         <div className="contact__box">
            <span>
               <img src={contactPhone} alt="" aria-hidden="true" />
            </span>
            <p className="contact__box-text">Still have questions?</p>
            <a className="contact__box-link contact__box-link-primary" href="#" aria-label="Contact us via phone">
               Contact us
            </a>
         </div>
         <div className="contact__box">
            <span>
               <img src={contactText} alt="" aria-hidden="true" />
            </span>
            <p className="contact__box-text">Don't like phone calls?</p>
            <a className="contact__box-link contact__box-link-success" href="#" aria-label="Contact us via text">
               Contact us
            </a>
         </div>
      </div>
   </div>
  )
};

export default FaqContact;