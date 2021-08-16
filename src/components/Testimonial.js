import React from "react";
import data from './data';
import { useEffect, useState } from 'react';

function Testimonial() {

  const { testimonials } = data;

  let index = 0;
  const [testimonial, setTestimonial] = useState(testimonials[index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonial(updateTestimonial);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  function updateTestimonial() {
    index = index + 1;
    if (index > testimonials.length - 1) {
      index = 0;

    }
    return testimonials[index];
  }

  return (
    <div className="mainContainer">
      <div class="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <p className="testimonial">
          {testimonial.text}
        </p>
        <div className="user">
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            class="user-image"
          />
          <div className="user-details">
            <h4 className="username">{testimonial.name}</h4>
            <p className="role">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;


