import React from 'react';
import { useForm } from 'react-hook-form';
import './subscribe.scss';

import bellIcon from '../../assets/images/illustrations/bell-icon.svg';
import envelope from '../../assets/images/icons/envelope.svg';

const Subscribe = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Subscribed with email:", data.email)
  };

  
  return (
    <section className="subscribe">
      <div className="container">

        {/* Bell-icon and header */}
        <div className="subscribe__header">
          <img className="subscribe__bell-icon" src={bellIcon} alt="Subscription bell image." />
          <h3 className="subscribe__title">Subscribe to our newsletter</h3>
        </div>


        {/* Email input form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="subscribe__form" aria-label="Newsletter subscription form.">
          <label htmlFor="email" className="sr-only">Enter your email to subscribe to our newsletter.</label>
          
          <div className="subscribe__input-wrapper">            
            {/* Envelope icon inside input */}
            <img className="subscribe__input-icon" src={envelope} alt="Envelope icon." />

            {/* Email input field */}
            <input
              className="subscribe__input"
              id="email"
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email to subscribe to our newsletter."
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Please enter a valid email adress"
                }
              })}
            />

            {/* Submit button */}
            <button type="submit" className="subscribe__button btn-medium btn-primary">Subscribe</button>

            {/* Error message for email validation */}
            {errors.email && <span className="subscribe__error">{errors.email.message}</span>}
          </div>
        </form>

      </div>
    </section>
  )
}

export default Subscribe