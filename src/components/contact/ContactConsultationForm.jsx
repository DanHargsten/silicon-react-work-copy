import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import './contact-consultation-form.scss';

const ContactConsultationForm = () => {
   const {
      register,
      handleSubmit,
      trigger,
      formState: { errors },
      reset,
   } = useForm();

   const [submitted, setSubmitted] = useState(false);

      
   const onSubmit = async (data) => {
      console.log('Form submitted: ', data);
      try {
         const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               fullName: data.fullName,
               email: data.email,
               specialist: data.specialist,
            }),
         });

         if (response.ok) {
            console.log('Contact form submitted successfully')
            setSubmitted(true);
            reset();         
         } else {
            console.error('Failed to submit contact form');
         }
      } catch (error) {
         console.error('Error:', error);
      }
   };

   const handleOk = () => {
      setSubmitted(false);
   };



   return (
      <div className="consultation">
         <h3 className="consultation__header">Get Online Consultation</h3>

         {/* Show validation message when the form is successfully sent */}
         {submitted ? (
            <div className="info-overlay">
               <div className="info-box">
                  <h1>Thank you for your message</h1>
                  <p>We'll return to you as soon as we can</p>
                  <button className="btn-small btn-primary" onClick={handleOk}>Okay</button>
               </div>
            </div>
         ) : (
      
         <form
            className="consultation__form"
            onSubmit={async (e) => {
               e.preventDefault();
               const result = await trigger();
               if (result) handleSubmit(onSubmit)(e);
            }}
         >
         
            {/* Full name */}
            <div>
               <label className="consultation__label" htmlFor="full-name">Full name</label>
               <input
               className="consultation__input"
               id="full-name"
               placeholder="Enter your full name"
               {...register('fullName', {
                  required: 'Full name is required',
                  pattern: {
                     value: /^[A-Za-z]+( [A-Za-z]+)+$/,
                     message: 'Please enter your full name with at least two words',
                  },
               })}
               type="text"
            />
            {errors.fullName && (
               <p className="contact-error">{errors.fullName.message}</p>
            )}
            </div>

         
            {/* Email Adress */}
            <div>
               <label className="consultation__label" htmlFor="email">Email adress</label>
               <input
                  className="consultation__input"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', {
                     required: 'Email is required',
                     pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Please enter a valid email adress'
                     },
                  })}
                  type="text"
               />
                  {errors.email && (
                     <p className="contact-error">{errors.email.message}</p>
                  )}          
               </div>

         
            {/* Specialist Selection */}  
            <div className="consultation__select">
               <label className="consultation__label" htmlFor="select">Specialist</label>
               <select
                  className="consultation__input"
                  id="select"
                  {...register('specialist', {
                     required: 'Please select a specialist',
                     validate: (value) =>
                        value !== 'default' || 'Please select a specialist',
                  })}
               >
                  <option value="default" >Select a Specialist</option>
                  <option value="specialist1">Specialist 1</option>
                  <option value="specialist2">Specialist 2</option>
                  <option value="specialist3">Specialist 3</option>
                  <option value="specialist4">Specialist 4</option>
                  <option value="specialist5">Specialist 5</option>
               </select>
               {errors.specialist && (
                  <p className="contact-error">{errors.specialist.message}</p>
               )}
            </div>

            {/* Submit Button */}
            <button className="consultation__button" type="submit" aria-label="Make an appointment">Make an appointment</button>  
         </form>
      )}
   </div>
  );
};

export default ContactConsultationForm