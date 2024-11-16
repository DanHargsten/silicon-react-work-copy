import React from 'react'
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

   const onSubmit = (data) => {
      console.log('Form submitted: ', data);
      alert('Appointment submitted successfully!');  // temporary

      reset();
   };



   return (
      <div className="consultation">
         <h3 className="consultation__header">Get Online Consultation</h3>

      
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
   </div>
  );
};

export default ContactConsultationForm