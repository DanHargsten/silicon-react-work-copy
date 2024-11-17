// ==========================
// Subscribe Component
// Allows users to subscribe to the newsletter by entering their email.
// Includes form validation and feedback upon submission.
// ==========================

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useApi } from '../../context/ApiContext';

import './subscribe.scss';

import bellIcon from '../../assets/images/illustrations/bell-icon.svg';
import envelope from '../../assets/images/icons/envelope.svg';


// ========== Component: Subscribe ==========
const Subscribe = () => {
  
  // ========== API Context ==========
  const { subscribe } = useApi();

  
  // ========== React Hook Form ==========  
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  
  // ========== State: Submission Feedback ==========
  const [submitted, setSubmitted] = useState(false);

  
   // ========== Form Submission Handler ==========
  const onSubmit = async (data) => {
    console.log("Subscribed with email:", data.email);
    try {
      const response = await fetch(subscribe, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
    });

    if (response.ok) {
      console.log('Subscription successful');
      setSubmitted(true); // Show success message
      reset(); // Reset form after successful submission
    } else {
      console.error('Failed to subscribe')
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


// ========== Close Feedback Handler ==========
const handleOk = () => {
  setSubmitted(false);
};

  

  // ========== Render: Subscribe Section ==========  
return (
  <section className="subscribe" aria-labelledby="subscribe-heading">
    <div className="container">

      {/* Success Overlay */}
      {submitted && (        
        <div
          className="info-overlay"
          role="dialog"
          aria-labelledby="thank-you-title"
          aria-describedby="tank-you-message"
        >
          <div className="info-box">
            <h1 id="thank-you-title">Thank you for subscribing</h1>
            <p id="thank-you-message">Stay put for our newsletters</p>
            <button
              className="btn-small btn-primary"
              onClick={handleOk}
              aria-label="Close the thank-you message."
            >
              Okay
            </button>
          </div>
        </div>        
      )}
          
      {/* Bell-icon and header */}
      <div className="subscribe__header">
        <img className="subscribe__bell-icon" src={bellIcon} alt="" aria-hidden="true" />
        <h3 className="subscribe__title">Subscribe to our newsletter</h3>
      </div>


      {/* Email input form */}
      <form
        className="subscribe__form"
        aria-label="Newsletter subscription form."
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await trigger();
          if (result) handleSubmit(onSubmit)(e);
        }}
      >
        <label htmlFor="email" className="sr-only">Enter your email to subscribe to our newsletter.</label>
      
        {/* Input Wrapper */}
        <div className="subscribe__input-wrapper">            
          {/* Envelope Icon */}
          <img className="subscribe__input-icon" src={envelope} alt="Envelope icon." />

          {/* Email Wnput */}
          <input
            className="subscribe__input"
            id="email"      
            type='text'
            placeholder="Enter your email"
            aria-label="Enter your email to subscribe to our newsletter."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Please enter a valid email adress"
              },
            })}
          />
          {/* Error Message */}
          {errors.email && (
            <p className="subscribe-error">{errors.email.message}</p>
          )}

          {/* Submit button */}
          <button type="submit" className="subscribe__button btn-medium btn-primary">Subscribe</button>  
        </div>
      </form>    
    </div>
  </section> 
  );
};

export default Subscribe;