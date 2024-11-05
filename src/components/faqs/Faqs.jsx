import React from 'react';
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


        <div className="faq__item">
            <div className="faq__question">
              <p className="faq__question-text">Is any of my personal information stored in the App?</p>
              <button className="btn-circle"><i className="fa-solid fa-chevron-down"></i></button>
            </div>                       
            <div className="faq__answer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aperiam praesentium quas sit, aliquid ex nobis? Nisi eveniet, sint, iusto maxime doloribus laudantium, ea eaque ipsam voluptatibus doloremque distinctio. Dolorem, totam itaque voluptas incidunt officia, voluptatum, voluptatibus distinctio deleniti non fugiat vero! Ab, sed non! Fugiat, dolores, dolorem ea, doloribus deserunt odit laudantium magni aspernatur tempore nobis consectetur itaque nihil.</p>
            </div>
        </div>
          

        <div className="faq__item">
            <div className="faq__question">
              <p className="faq__question-text">What formats can I download my transaction history in?</p>
              <button className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>                  
            <div className="faq__answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos doloribus magni quo temporibus eveniet porro, quasi laboriosam ducimus blanditiis!</p>
            </div>
        </div>
          

        <div className="faq__item">
            <div className="faq__question">
              <p className="faq__question-text">Can I schedule future transfers?</p>
              <button className="btn-circle"><i className="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className="faq__answer">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
        </div>
          

        <div className="faq__item">
            <div className="faq__question">
              <p className="faq__question-text">When can I use Banking App services?</p>
              <button className="btn-circle"><i className="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className="faq__answer">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi commodi perspiciatis repellat, doloremque ex non enim magnam ea soluta error mollitia voluptatum nisi, quisquam aspernatur nam culpa consectetur explicabo ipsam tempore pariatur corrupti. Tempora culpa cum ipsa ratione at!</p>
            </div>
        </div>
          

        <div className="faq__item">
            <div className="faq__question">
              <p className="faq__question-text">Can I create my own password that is easy for me to remember?</p>
              <button className="btn-circle" aria-expanded="false"><i className="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className="faq__answer">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, amet porro, incidunt mollitia ut commodi rerum sequi velit unde veritatis, magnam perspiciatis ipsum vel suscipit architecto pariatur temporibus quia omnis? Corporis itaque aliquam ad voluptatibus fugiat at, aut recusandae quidem tempora suscipit libero sit commodi vitae rerum. Minus voluptas aliquid vitae doloremque harum deleniti earum? Quas repellat itaque minus doloremque laudantium possimus pariatur nisi voluptas.</p>
            </div>
        </div>
          

        <div className="faq__item">
            <div className="faq__question">
              <p className="faq__question-text">What happens if I forget or lose my password?</p>
              <button className="btn-circle"><i className="fa-solid fa-chevron-down"></i></button>
            </div>
            <div className="faq__answer">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deserunt et corporis optio harum voluptates, nostrum consectetur quae similique vero cupiditate obcaecati assumenda tempore inventore consequuntur asperiores, laborum soluta voluptas enim, sapiente doloremque error nihil!</p>
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