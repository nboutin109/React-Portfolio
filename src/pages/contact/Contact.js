import React, {Component} from "react";
import {Form, Button, Container, Col} from 'react-bootstrap';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
  state = {
    name: '',
    company: '',
    email: '',
    message: '',
    errors: []
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, company, email, message} = this.state;
    let templateParams = {
      name: name,
      company: company,
      email: email,
      message: message,
     }
     emailjs.send(
      'service_wuify9c',
      'template_eysun2c',
      templateParams,
      'user_vCKER3fc5KPLMVxrNRVQK'
     ).then(res => {
    	console.log('Email successfully sent!')
  	})
  	.catch(err => console.log(err))
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      company:'',
      email: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

render () {
  return (
    <div>
      <Container style={{ textAlign: 'left'}}>
      <Col xs="auto">
        <h1 style={{ paddingTop: '1rem'}}>Please use the form below to contact me</h1>
      <Form onSubmit={this.handleSubmit.bind(this)}>

  <Form.Group controlId="name">
    <Form.Label>Please enter your name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Your name here" size="lg" style={{maxWidth: '50rem'}} value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required/>
  </Form.Group>
  <Form.Group controlId="company">
    <Form.Label>What is the name of your company?</Form.Label>
    <Form.Control type="text" name='company' placeholder="Your companys' name (if applicable)" size="lg" style={{maxWidth: '50rem'}} value={this.state.company} onChange={this.handleChange.bind(this, 'company')}/>
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>Please enter your email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Your email here" size="lg" style={{maxWidth: '50rem'}} value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
  </Form.Group>
  <Form.Group controlId="message">
    <Form.Label>Please input your message here:</Form.Label>
    <Form.Control as="textarea" row={5} name='message' placeholder="Your message here" size="lg" style={{maxWidth: '50rem'}} value={this.state.message} onChange={this.handleChange.bind(this, 'message')}/>
  </Form.Group>
  <Button variant="primary" type="submit" id="submit">
    Send
  </Button>
  <div className="text-danger"></div>
</Form>
</Col>
<Col xs="auto"></Col>
</Container>
    </div>
  );
}
}

export default ContactForm;
