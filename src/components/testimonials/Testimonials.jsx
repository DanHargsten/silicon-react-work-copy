/*
 * =================== Testimonials Component ===================
 * This component fetches and displays client testimonials for the app.
 * Each testimonial includes:
 * - A star rating, rendered dynamically based on the `starRating` value.
 * - A comment from the client about the app.
 * - User information, including the client's avatar, name, and job role.
 * 
 *  Assistance with code structuring for useEffect and API-calls by ChatGPT  
 */

import React, { useEffect, useState } from 'react';
import { useApi } from '../../context/ApiContext';
import './testimonials.scss';

// Importing image assets for quote and star icons
import quote from '../../assets/images/icons/quotation-mark.svg';
import starEmpty from '../../assets/images/ratings/star-empty.svg';
import starFull from '../../assets/images/ratings/star-filled.svg';


// Testimonials Component
const Testimonials = () => {

  const { getTestimonials } = useApi();

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(getTestimonials);
        
        // If response is not okay, throw an error
        if (!response.ok) {
          throw new Error('Network reponse was not ok');
        }

        const data = await response.json();
        setTestimonials(data);        
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    
    fetchTestimonials();
  }, []);

  
  // ---- Render testimonials ----
  return (
    <section className="testimonials">
      <div className="container">

        {/* Section heading */}
        <h2 className="testimonials__heading">Clients are Loving Our App</h2>

        {/* Map over each testimonial in the array */}
        {testimonials.map((testimonial) => (
          // tabIndex to make testimonials focusable for screenreaders
          <figure key={testimonial.id} className="testimonials__card" tabIndex="0">
            {/* Quote icon positioned at the top */}
            <img className="testimonials__quote" src={quote} alt="" aria-hidden="true" />

            {/* Star rating display */}
            <div className="testimonials__rating" aria-label={`Rating: ${testimonial.starRating} out of 5`}>              
              {/* Render full stars based on the rating value */}
              {Array(testimonial.starRating).fill().map((_, index) => (
                <img key={`full-${index}`} src={starFull} alt="Full star" />
              ))}
              {/* Render empty stars for remaining out of 5 stars */}
              {Array(5 - testimonial.starRating).fill().map((_, index) => (
                <img key={`empty-${index}`} src={starEmpty} alt="Empty star" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="testimonials__text">
              {testimonial.comment}
            </blockquote>

            {/* User info with avatar and name */}
            <figcaption className="testimonials__user-info">
              <img
                className="testimonials__user-photo"
                src={testimonial.avatarUrl}
                alt={`Portrait of ${testimonial.author}`}
              />
              <div className="testimonials__user-text">
                {/* Display author name and job role */}
                <p className="testimonials__user-name">{testimonial.author}</p>
                <p className="testimonials__user-role">{testimonial.jobRole}</p>
              </div>
            </figcaption>               
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;