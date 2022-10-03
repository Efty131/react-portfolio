import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { MailchimpForm } from "./MailchmpForm";
import Logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                {/* <MailchimpForm /> */}
                <Col sm={6}>
                    <img src={Logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/efty-7157461bb/" target="blank"><img src={navIcon1} alt="..." /></a>
                        <a href="https://www.facebook.com/EftyEfty75/" target="blank"><img src={navIcon2} alt="..." /></a>
                        <a href="https://www.instagram.com/eftyefty75/" target="blank"><img src={navIcon3} alt="..." /></a>
                    </div>
                    <p>CopyRight 2022, All Right Reserved To <span className="fw-bold text-info"><i>Efty</i></span></p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

