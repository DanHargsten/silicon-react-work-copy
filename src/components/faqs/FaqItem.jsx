import React, { useState } from 'react';
import './faqs.scss';


const FaqItem = ({ question, answer }) => {

  // State to track if the question is opened or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function that handles click to toggle between open and close
  const toggleOpen = () => setIsOpen(!isOpen);


  return (
    <section className="faq">
      <div className="container">


       <div className="faq__heading">
          <h2 className="faq__heading-title">Any questions? Check out the FAQs</h2>
          <p className="faq__heading-text">Still have unanswered questions and need to get in touch?</p>
       </div>

       
       <div className="faq__accordion">  

        {/* Accordion element structure by Joakim Lindh */}
        <div className={`faq__item ${isOpen ? 'open' : ''}`}>
          
          {/* Question section */}
          <div className="faq__item-question" onClick={toggleOpen}>
            <p className="faq__item-question--text">{question}</p>
            <button className="btn-circle">
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

      </div>


       <div className="faq__contact">
          <div className="contact-box">
             <p className="contact-box-text">Still have questions?</p>
             <a className="contact-box-btn" href="#">Contact us</a>
          </div>
          <div className="contact-box">
             <p className="contact-box-text">Don't like phone calls?</p>
             <a className="contact-box-hide btn-medium btn-primary" href="#">Contact us</a>
          </div>
       </div>
    
      </div>
    </section>
  )
}

export default FaqItem;