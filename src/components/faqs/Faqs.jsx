import React, { useState } from 'react';
import './faqs.scss';


const Faqs = () => {
  return (
    <section className="faq">
      <div className="container">


       <div className="faq__heading">
          <h2 className="faq__heading-title">Any questions? Check out the FAQs</h2>
          <p className="faq__heading-text">Still have unanswered questions and need to get in touch?</p>
       </div>

       
       <div className="faq__accordion">  

        {/* Accordion element structure by Joakim Lindh */}
        <div className="faq__item">
            <div className="faq__item-question">
              <p className="faq__item-question--text">What happens if I forget or lose my password?</p>
              <button className="btn-circle">
                <i class='bx bx-chevron-down'></i>
              </button>
            </div>
            <div className="faq__item-answer">
              <div className="faq__item-answer--expand">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt et corporis optio harum voluptates, nostrum consectetur quae similique vero cupiditate obcaecati assumenda tempore inventore consequuntur asperiores, laborum soluta voluptas enim, sapiente doloremque error nihil!</p>
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

export default Faqs;