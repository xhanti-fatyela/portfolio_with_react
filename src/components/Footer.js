import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/xhanti-lomzi-fatyela-21b960204/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/xhanti-fatyela"><img src={navIcon2} alt="Icon" /></a>
          
            </div>
            <p>Call/Whatsapp: 0603466352</p>
            <p>Email: xhantifatyela00@gmail.com</p>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
