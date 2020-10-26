import React , { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function About() {
    const [projects] = useState([
        {
            image: 'Pic2.jpg'      
        }
      ])
    return (



        <div className = "flex-row">
        <div className= "image" >
            
        
        <Container  key="Container"  >
        <Row  key= "Row" className = "d-flex justify-content-md-center link container-fluid" >
        <Col md={12}  className = " d-flex justify-content-center  ">
    
        <Card   >
        <img src= {process.env.PUBLIC_URL+"/"+projects[0].image} alt="Card image"/>
        {/* <Card.Img  src= {process.env.PUBLIC_URL+"/"+projects[0].image} alt="Card image" className = "image-size about"/> */}
        </Card>
        </Col>
        </Row>
        </Container>
        <h1 className= "flex-row width h1-overlay"> Computer programmer/web developer with engineering background located in York, Pa. Three years professional programming experience in Tcl, Linux and Perl, programming ANSYS and ICEM macros. Strategic problem-solver with a core value of integrity. Changing from engineering to programming because I enjoy coding. Looking forward to my web development journey.  Have enjoyed it so far!
        </h1>
        </div>
        </div>
    )
}

export default About;