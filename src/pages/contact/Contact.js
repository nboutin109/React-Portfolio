import React from "react";
import {Form, Button, Container, Col} from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <Container style={{ textAlign: 'left'}}>
      <Col xs="auto">
        <h1 style={{ paddingTop: '1rem'}}>Please contact me using the form below!</h1>
      <Form>
  <Form.Group controlId="name">
    <Form.Label>Please enter your name</Form.Label>
    <Form.Control type="text" placeholder="Your name here" />
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>Please enter your email address</Form.Label>
    <Form.Control type="text" placeholder="Your email here" />
  </Form.Group>

  <Form.Group controlId="message">
    <Form.Label>Please input your message here:</Form.Label>
    <Form.Control as="textarea" row={5} placeholder="Your message here" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
<Col xs="auto"></Col>
</Container>
    </div>
  );
}

export default Contact;
