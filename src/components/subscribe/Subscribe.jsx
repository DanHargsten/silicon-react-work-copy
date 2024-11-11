//======= Imports =======
import React from 'react';
import { useForm } from 'react-hook-form';  // Imports react-hook-form for handling form state and validation
import './subscribe.scss';  // Imports styles 

// Icons used in the subscribe section
import bellIcon from '../../assets/images/illustrations/bell-icon.svg';
import envelope from '../../assets/images/icons/envelope.svg';


//======= Subscribe Component =======
const Subscribe = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const apiUrl = 'https://win24-assignment.azurewebsites.net/api/forms/subscribe';

  // ---- onSubmit Function ----
  // Handles form submission by sending a POST request to the API.
  const onSubmit = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

       
      // Checks if request was successful
      if (response.ok) {
        console.log('Email successfully submitted:', data.email);
        alert('Thank you'); // Temp, fix
      } else {
        console.log('Failed:', response.statusText);
        alert('Failed to subscribe.'); // Temp, fix
      }
    } catch (error) {
      console.error('Error', error);  // Logs network errors in console
      alert('An error occured'); // Temp, fix
    }
  };

  
  return (
    <section className="subscribe">
      <div className="container">

        {/* ------- Header Section: Bell Icon and Title ------- */}
        <div className="subscribe__header">
          <img className="subscribe__bell-icon" src={bellIcon} alt="Subscription icon." />
          <h3 className="subscribe__title">Subscribe to our newsletter</h3>
        </div>


        {/* ------- Form Section: Email Input and Submit Button ------- */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="subscribe__form" aria-label="Newsletter subscription form.">
          <label htmlFor="email" className="sr-only">Enter your email to subscribe to our newsletter.</label>
          
          <div className="subscribe__input-wrapper">            
            {/* Envelope icon inside input */}
            <img className="subscribe__input-icon" src={envelope} alt="Email icon." />

            {/* Email input field */}
            <input
              className="subscribe__input"
              id="email"
              type="email"
              placeholder="Enter your email"
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
            {errors.email && (
              <span className="subscribe__error" aria-live="assertive">
                {errors.email.message}  {/* Displays dynamic error message from validation */}
              </span>
            )}
          </div>
        </form>

      </div>
    </section>
  )
};

export default Subscribe