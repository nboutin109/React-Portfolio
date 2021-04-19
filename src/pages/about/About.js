import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom"
import headShot from "./Images/978A0641.jpg";
import linkedIn from "./Images/LI.png";
import gitHub from "./Images/GH.png";

function About() {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <Container className={'glass'} >
        <h1>About Me</h1>
        <Row>
          <Col xs={3}>
            <Image src={headShot} rounded style={{ height: '15rem', width: '11rem', }} />
            <a href="https://www.linkedin.com/in/nboutin" target="_blank" rel="noopener noreferrer"><Image src={linkedIn} style={{ paddingTop: '1rem', height: '4rem', width: '11rem' }} /></a>
            <a href="https://github.com/nboutin109" target="_blank" rel="noopener noreferrer"><Image src={gitHub} style={{ paddingTop: '1rem', height: '4rem', width: '11rem' }} /></a>
          </Col>
          <Col md={9}>
            <span style={{ textAlign: 'left' }}>My name is Nicholas Boutin and I am currently searching for a new position in the technology industry. I am a recent graduate of </span><span style={{ textDecoration: "underline" }}>The Georgia Institute of Technology's Full-Stack Web Design bootcamp</span><span> and I also posess a Bachelor's in Business Administration from Georgia State University. I currently hold a position at the Coca-Cola Atlanta headquarters as an events/meetings ambassador and previously worked in the hotel industry.</span>
            <p></p>
            <p>My current skillset includes:</p>
            <ul>
            <li style={{textIndent: '1rem'}}>HTML, CSS, and Javascript</li>
            <li style={{textIndent: '1rem'}}>jQuery and bootstrap</li>
            <li style={{textIndent: '1rem'}}>MongoDB and SQL/MySQL</li>
            <li style={{textIndent: '1rem'}}>React.js (used to make this portfolio)</li>
            <li style={{textIndent: '1rem'}}>Node.js, Express.js, and multiple NPM packages</li>
            <li style={{textIndent: '1rem'}}>RESTful APIS</li>
            <li style={{textIndent: '1rem'}}>Currently learning Angular.js and animation</li>
            </ul>
            <p>If you would like to know more about me you can also<a href="https://drive.google.com/file/d/1Ojkzw0E-XUSQUP1jvuH9FpZtQ-NndW7b/view" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> view my resume here</a></p>
            <br></br>
            <p>I can be contacted through my email <a href="mailto:nboutin109@gmail.com" style={{color:'white'}}>nboutin109@gmail.com</a> or through <Link to="/Nicholas-Boutin-Coding-Portfolio/contact" style={{color:'white'}}>this form</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;