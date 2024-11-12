import React from 'react'

import './contact-map.scss';

import map from '../../assets/images/illustrations/map.svg';
import iconLocation from '../../assets/images/icons/map-location.svg';
import iconPhone from '../../assets/images/icons/map-phone.svg';
import iconTime from '../../assets/images/icons/map-time.svg';
import socialFacebook from '../../assets/images/icons/bxl-facebook.svg';
import socialInstagram from '../../assets/images/icons/bxl-instagram.svg';
import socialTwitter from '../../assets/images/icons/bxl-twitter.svg';
import socialYoutube from '../../assets/images/icons/bxl-youtube.svg';

const ContactMap = () => {
  return (
   <section className="contact-map" aria-label="Medical Centers and Locations">
   <div className="container">

      <img className="contact-map__image" src={map} alt="" />

      <div className="contact-map__centers-info">
         <article className="contact-map__center">
            <h3 className="contact-map__center-heading">Medical Center 1</h3>
            <address className="contact-map__address">
               <div className="contact-map__icon-text">
                  <img src={iconLocation} alt="Location icon." />
                  <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
               </div>
               <div className="contact-map__icon-text">
                  <img src={iconPhone} alt="Phone icon." />
                  <span><a href="tel:+4065550120">(406) 555-0120</a></span>
               </div>
            </address>
            <div className="contact-map__hours">
               <img src={iconTime} alt="Clock icon." />
               <p>
                  <span className="bolded">Mon - Fri:</span> 9:00 am - 22:00am <br />
                  <span className="bolded">Sat - Sun:</span> 9:00 am - 20:00 am
               </p>
            </div>
         </article>

         <article className="contact-map__center">
            <h3 className="contact-map__center-heading">Medical Center 2</h3>
            <address className="contact-map__address">
               <div className="contact-map__icon-text">
                  <img src={iconLocation} alt="Location icon." />
                  <span>2464 Royal Ln. Mesa,New Jersey 45463</span>
               </div>
               <div className="contact-map__icon-text">
                  <img src={iconPhone} alt="Phone icon." />
                  <span><a href="tel:+4065440123">(406) 544-0123</a></span>
               </div>
            </address>
            <div className="contact-map__hours">
               <img src={iconTime} alt="Clock icon." />
               <p>
                  <span className="bolded">Mon - Fri:</span> 9:00 am - 22:00am <br />
                  <span className="bolded">Sat - Sun:</span> 9:00 am - 20:00 am
               </p>
            </div>
         </article>

         <div className="contact-map__socials">
            <div className="socials-box">
               <img src={socialFacebook} alt="" />
            </div>
            <div className="socials-box">
               <img src={socialTwitter} alt="" />
            </div>
            <div className="socials-box">
               <img src={socialInstagram} alt="" />
            </div>
            <div className="socials-box">
               <img src={socialYoutube} alt="" />
            </div>
         </div>
      </div>

   </div>
</section>
  )
}

export default ContactMap