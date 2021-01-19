import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "react-bootstrap";

function About() {
  return (
    <div>
      <Container style={{ textAlign: 'left'}}>
        <Col xs="auto">
        <h1 style={{ paddingLeft: '0', paddingTop: '1rem'}}>About Me</h1>
        <Row>
          <p style={{ paddingLeft: '1rem'}}>My name is Nicholas Boutin, and I am a recent graduate of the Georgia Institute of Technology's full stack web design bootcamp. I am currently searching for a position in the technology sector that will allow me to use my web design skills.</p>
        </Row>
        <Row>
          <a href="https://www.linkedin.com/in/nboutin"><p style={{ paddingLeft: '1rem'}}>See my LinkedIn page</p></a>
        </Row>
        <Row>
          <a href="https://github.com/nboutin109"><p style={{ paddingLeft: '1rem'}}>See my Github profile</p></a>
        </Row>
        <Row>
          <a href="https://docs.google.com/document/d/1_xio8nKGWd4ElUFgK04P478Y-0rz552ATNiXRUqFtTc/edit?usp=sharing"><p style={{ paddingLeft: '1rem'}}>See my resume here</p></a>
        </Row>
        </Col>
      </Container>
    </div>
  );
}

export default About;