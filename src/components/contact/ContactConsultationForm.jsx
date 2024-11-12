import React from 'react'

import './contact-consultation-form.scss';

const ContactConsultationForm = () => {
  return (
   <div className="consultation">
   <h3 className="consultation__header">Get Online Consultation</h3>


   <form className="consultation__form">
      <div>
         <label className="consultation__label" for="full-name">Full name</label>
         <input className="consultation__input" id="full-name" name="full-name" type="text" />
      </div>
      <div>
         <label className="consultation__label" for="email">Email adress</label>
         <input className="consultation__input" id="email" name="email" type="text" />
      </div>
      <div className="consultation__select">
         <label className="consultation__label" for="select">Specialist</label>
         <select className="consultation__input" id="select" name="select">
            <option value="default" disabled selected>Select a Specialist</option>
            <option value="specialist1">Specialist 1</option>
            <option value="specialist2">Specialist 2</option>
            <option value="specialist3">Specialist 3</option>
            <option value="specialist4">Specialist 4</option>
            <option value="specialist5">Specialist 5</option>
         </select>
      </div>
   </form>


   <button className="consultation__button" type="submit" aria-label="Make an appointment">Make an appointment</button>
</div>
  )
}

export default ContactConsultationForm