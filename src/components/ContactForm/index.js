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


// JSX
return (
    <section>
    <Container  key="Container"  >
    <Row  key= "Row" className = "d-flex justify-content-md-center link container-fluid" >
    <Col sm={3} md={3}  className = " d-flex justify-content-center  ">

    <Card   className="bg-dark text-white card-background ">
    <Card.Img  src= {process.env.PUBLIC_URL+"/"+projects[0].image} alt="Card image" className = "image-size "/>
    </Card>
    </Col>
    </Row>
    </Container>

      <a className= "text-center set-padding link" href = "mailto:danielclyons@yahoo.com">Email: danielclyons@yahoo.com</a>
      <a className= "text-center set-padding link" href = "https://www.linkedin.com/in/dan-lyons-41380337/">LinkedIn: https://www.linkedin.com/in/dan-lyons-41380337/</a>
      <a className= "text-center set-padding link" href = "https://github.com/dancl6">GitHub: https://github.com/dancl6 </a>
      <a className= "text-center set-padding link" href = "https://dancl6.github.io/Test-React4/">Portfolio: https://dancl6.github.io/Test-React4/</a>

      
    </section>
)
}

export default ContactForm;