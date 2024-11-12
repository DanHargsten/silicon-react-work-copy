/*
 * FaqItem Component
 * 
 * Represents an individual FAQ item within the accordion.
 * - Displays question text with a toggle button
 * - Expands to reveal answer text when clicked
 */

import React, { useState } from 'react';
import './faq-item.scss';

const FaqItem = ({ question, answer }) => {

  // State to track if the question is opened or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function that handles click to toggle between open and close
  const toggleOpen = () => setIsOpen(!isOpen);

  return (    
      <div className={`faq__item ${isOpen ? 'open' : ''}`}>
        
        {/* Question section */}
        <div className="faq__item-question" onClick={toggleOpen}>
          <p className="faq__item-question--text">{question}</p>
          <button className={`btn-circle ${isOpen ? 'open' : ''}`}>
            <i className='bx bx-chevron-down'></i>
          </button>
        </div>

        {/* Answer section */}        
        <div className="faq__item-answer">
          <div className="faq__item-answer--expand">

            {isOpen && <p>{answer}</p>}
          </div>
        </div>  
      </div>        
  );
}

export default FaqItem;