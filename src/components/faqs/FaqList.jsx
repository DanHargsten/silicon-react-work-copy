import React from 'react';
import FaqItem from './FaqItem';

const FaqList = () => {
   const faqs = [
      {
         question: 'What happens if I forget or lose my password?',
         answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      },
   ];


   return (
    <div className="faq__accordion">
      {faqs.map((faq, index) => (
         <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;