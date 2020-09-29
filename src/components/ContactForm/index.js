import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function ContactForm() {

  const [projects] = useState([
    {
        image: 'DanPic2.jpg'      
    }
  ])

  console.log("i am at project.image", projects[0].image)

    // const [errorMessage, setErrorMessage] = useState('');
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //           } else {
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //               } else {
    //                 setErrorMessage('');
    //               }
    //           }
    //       } 
    //       if (e.target.name === 'message') {
    //         if(e.target.value === '') {
    //           setErrorMessage('message is required')
    //         } else {
    //           setErrorMessage('')
    //         }
    //       }
    //       if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //       }
    //     console.log('errorMessage', errorMessage);
    //   }
      
    //   console.log(formState);
    //   function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    //   }
// JSX
return (
    <section>
    <Container  key="Container"  >
    <Row  key= "Row" className = "d-flex justify-content-md-center link" >
    <Col sm={3} md={3}  className = "col-border d-flex justify-content-center">

    <Card   className="bg-dark text-white card-background set-padding">
    <Card.Img  src= {process.env.PUBLIC_URL+"/"+projects[0].image} alt="Card image" className = "image-size"/>
    </Card>
    </Col>
    </Row>
    </Container>

      <a className= "text-center set-padding link" href = "mailto:danielclyons@yahoo.com">Email: danielclyons@yahoo.com</a>
      <a className= "text-center set-padding link" href = "https://www.linkedin.com/in/dan-lyons-41380337/">LinkedIn: https://www.linkedin.com/in/dan-lyons-41380337/</a>
      <a className= "text-center set-padding link" href = "https://github.com/dancl6">GitHub: https://github.com/dancl6 </a>
      <a className= "text-center set-padding link" href = "https://dancl6.github.io/Test-React4/">Portfolio: https://dancl6.github.io/Test-React4/</a>

        {/* <h1 data-testid="contact">Contact me (Currently Non-Functional)</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />

            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            </div>
            <button data-testid="submit-button" type="submit">Submit</button>
        </form> */}
    </section>
)
}

export default ContactForm;