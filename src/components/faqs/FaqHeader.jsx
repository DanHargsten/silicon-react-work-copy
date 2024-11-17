// ===========================================
// FaqHeader Component
// Displays the main heading and introductory text for the FAQ section.
// ===========================================

import React from 'react';
import './faq-header.scss';

const FaqHeader = () => {
  return (
   <div className="faq__heading">
      <h2 className="faq__heading-title">Any questions? Check out the FAQs</h2>
      <p className="faq__heading-text">Still have unanswered questions and need to get in touch?</p>
   </div>
  )
};

export default FaqHeader