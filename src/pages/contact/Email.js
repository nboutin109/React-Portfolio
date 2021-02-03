import * as emailjs from 'emailjs-com';

function handleSubmit(){
emailjs.sendForm('service_wuify9c', 'template_eysun2c', '#contactForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

export default handleSubmit