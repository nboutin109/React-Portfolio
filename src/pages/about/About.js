import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Image} from "react-bootstrap";
import headShot from "./Images/978A0641.jpg";
import linkedIn from "./Images/LI.png";
import gitHub from "./Images/GH.png";

function About() {
  return (
    <div>
      <Container style={{ textAlign: 'left'}}>
        <h1 style={{ paddingLeft: '0', paddingTop: '1rem'}}>About Me</h1>
        <Row>
          <Col md={3}>
          <Image src={headShot} rounded style={{height: '15rem', width: '11rem',}}/>
          
          </Col>
          <Col md={9}>
            <span style={{textAlign: 'left'}}>My name is Nicholas Boutin and I am currently searching for a position to start my career in the technology industry. I am a recent graduate of</span><span style={{textDecoration: "underline"}}> Georgia Institute of Technology's full-stack web design bootcamp</span><span> and I also posess a Bachelor's in business administration from Georgia State University. I currently hold a position at the Coca-Cola Atlanta headquarters as an events/meetings ambassador and previously worked in the hotel industry.</span>
            <p></p>
            <p>If you would like to know more about me:</p>
            <a href="https://docs.google.com/document/d/1_xio8nKGWd4ElUFgK04P478Y-0rz552ATNiXRUqFtTc/edit?usp=sharing"><span style={{ paddingLeft: '1rem'}}>View my full resume here</span></a><p></p>
            <a href="https://linkedin.com/nboutin"><span style={{ paddingLeft: '1rem'}}>View my Linkedin account here</span></a><p></p>
            <a href="https://github.com/nboutin109"><span style={{ paddingLeft: '1rem'}}>View my Github account here</span></a>
          </Col>
        </Row>
        <Row>
          <a href="https://linkedin.com/nboutin"><Image src={linkedIn} style={{padding: '1rem', height: '5rem', width: '13rem'}} /></a>
        </Row>
        <Row>
          <a href="https://github.com/nboutin109"><Image src={gitHub} style={{padding: '1rem', height: '5rem', width: '13rem'}} /></a>
        </Row>
      </Container>
    </div>
  );
}

export default About;