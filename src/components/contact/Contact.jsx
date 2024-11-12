import React from 'react'

import ContactConsultationForm from './ContactConsultationForm';
import ContactHero from './ContactHero';
import ContactMap from './ContactMap';

import './contact.scss';

const contacts = () => {
   return (
      <>
         <main className="hero">
            <div className="container">
               <ContactHero /> 
               <ContactConsultationForm />
            </div>
         </main>
         <ContactMap />
      </>
   )
}

export default contacts