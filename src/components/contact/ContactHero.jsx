import React from 'react';

import './contact-hero.scss';

import iconMail from '../../assets/images/icons/contact-email.svg';
import iconGroup from '../../assets/images/icons/contact-group.svg';

const ContactHero = () => {
  return (
      <div className="hero__container">
         <h1 className="hero__title">Contact Us</h1>
         
         <div className="hero__method">
            <i className="hero__icon"><img src={iconMail} alt="" /></i>
            <div>
               <h3 className="hero__method-title">Email us</h3>
               <p className="hero__description">Please feel free to drop us a line. We will respond as soon as possible.</p>
               <a className="hero__link" href="">Leave a message
                  <span><i className="bx bx-right-arrow-alt"></i></span>
               </a>
            </div>
         </div>


         <div className="hero__method">
            <i className="hero__icon"><img src={iconGroup} alt="" /></i>
            <div>
               <h3 className="hero__method-title">Careers</h3>
               <p className="hero__description">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
               <a className="hero__link" href="">Send an application<span><i className="bx bx-right-arrow-alt"></i></span></a>
            </div>
         </div>
      </div>
  )
}

export default ContactHero