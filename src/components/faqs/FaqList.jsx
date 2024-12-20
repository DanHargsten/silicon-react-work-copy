// ===========================================
// FaqList Component
// Renders the FAQ section, including the header, accordion list of questions,
// and a contact section for users who need further help.
//
// Assistance with code structuring and API-calls by ChatGPT
// ===========================================

import React, { useEffect, useState } from 'react';

import FaqContact from './FaqContact';
import FaqHeader from './FaqHeader';
import FaqItem from './FaqItem';
import { useApi } from '../../context/ApiContext';

import './faq-list.scss';

const FaqList = () => {

   const { getFaqs } = useApi();
   const [faqs, setFaqs] = useState([]);

   // Fetch FAQ data from API on component mount
   useEffect(() => {
      async function fetchFaqData() {
         try {
            const response = await fetch(getFaqs);
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFaqs(data);
         } catch (error) {
            console.error('Error fetching FAQ data:', error);
         }
      }
      fetchFaqData();
   }, []);   

  
  
  
   return (
      <section className="faq">
         <div className="container">
           
            {/* FAQ Header */}
            <FaqHeader />

            {/* FAQ Accordion List */}
            <div className="faq__accordion">
               {faqs.map((faq) => (
                  // Wrap each FaqItem in its own section for styling
                  <section key={faq.id} className="faq__section">
                     <FaqItem question={faq.title} answer={faq.content} />
                  </section>
               ))}
            </div>
            
            {/* FAQ Contact Section */}
            <FaqContact />
         </div>
      </section>
  );
};

export default FaqList;