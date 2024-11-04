import React from 'react';
import './subscribe.scss';

import bellIcon from '../../assets/images/illustrations/bell-icon.svg';
import envelope from '../../assets/images/icons/envelope.svg';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">

        {/* Bell-icon and header */}
        <div className="subscribe__header">
          <img className="subscribe__bell-icon" src={bellIcon} alt="Subscription bell image." />
          <h3 className="subscribe__title">Subscribe to our newsletter</h3>
        </div>

        {/* Email input and button */}
        <form className="subscribe__form" aria-label="Newsletter subscription form.">
          <label htmlFor="email" className="sr-only">Enter your email to subscribe to our newsletter.</label>
          <div className="subscribe__input-wrapper">
            <img className="subscribe__input-icon" src={envelope} alt="Envelope icon." />
            <input className="subscribe__input" id="email" type="email" placeholder="Enter your email" aria-label="Enter your email to subscribe to our newsletter." />
            <button className="subscribe__button btn-medium btn-primary">Subscribe</button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Subscribe