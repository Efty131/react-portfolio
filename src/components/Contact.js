import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import "animate.css";
import TrackVisibility from "react-on-screen";

import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {

  const [state, handleSubmit] = useForm("mwkyvwoy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section className='contact' id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                 <img src={contactImg} alt="..." />
                </Col>
                <Col md={6}>
                  <TrackVisibility>
                  {({ isVisible }) => 
                  <div className={ isVisible ? "animate__animated animate__fadeInUp" : ""}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <label htmlFor='name'>Name</label>
                      <input id="name" type="text" name="name" />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor='phone'>Phone No.</label>
                      <input id="name" type="number" name="phone" />
      <label htmlFor='message'>Message</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" id="btn" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>}
    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
