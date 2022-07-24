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
                        <a href="#home"><img src={navIcon1} alt="..." /></a>
                        <a href="#home"><img src={navIcon2} alt="..." /></a>
                        <a href="#home"><img src={navIcon3} alt="..." /></a>
                    </div>
                    <p>CopyRight 2022, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

