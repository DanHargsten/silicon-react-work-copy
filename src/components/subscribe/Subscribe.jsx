import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useApi } from '../../context/ApiContext';

import './subscribe.scss';

import bellIcon from '../../assets/images/illustrations/bell-icon.svg';
import envelope from '../../assets/images/icons/envelope.svg';


const Subscribe = () => {
  
  const { subscribe } = useApi();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log("Subscribed with email:", data.email);
    try {
      const response = await fetch(subscribe, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
        }),
    });

    if (response.ok) {
      console.log('Subscription successful');
      setSubmitted(true);
      reset();
    } else {
      console.error('Failed to subscribe')
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  const handleOk = () => {
    setSubmitted(false);
  };

  

  
return (
  <section className="subscribe">
    <div className="container">

      {submitted && (
        <>
          <div className="info-overlay">
            <div className="info-box">
              <h1>Thank you for subscribing</h1>
              <p>Stay put for our newsletters</p>
              <button className="btn-small btn-primary" onClick={handleOk}>Okay</button>
            </div>
          </div>
        </>
      )}
          
      {/* Bell-icon and header */}
      <div className="subscribe__header">
        <img className="subscribe__bell-icon" src={bellIcon} alt="" aria-hidden="true" />
        <h3 className="subscribe__title">Subscribe to our newsletter</h3>
      </div>


      {/* Email input form */}
      {/* <form onSubmit={handleSubmit(onSubmit)} noValidate className="subscribe__form" aria-label="Newsletter subscription form."> */}
      <form
        className="subscribe__form"
        aria-label="Newsletter subscription form."
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await trigger();
          if (result) handleSubmit(onSubmit)(e);
        }}
        // {handleSubmit(onSubmit)}
      >
        <label htmlFor="email" className="sr-only">Enter your email to subscribe to our newsletter.</label>
      
        <div className="subscribe__input-wrapper">            
          {/* Envelope icon inside input */}
          <img className="subscribe__input-icon" src={envelope} alt="Envelope icon." />

          {/* Email input field */}
          <input
            className="subscribe__input"
            id="email"      
            placeholder="Enter your email"
            aria-label="Enter your email to subscribe to our newsletter."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Please enter a valid email adress"
              },
            })}
            type='text'
          />
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