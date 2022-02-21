import React from 'react'
import {Container,Col,Row,Image,Accordion} from 'react-bootstrap';
import F from  '../../assest/template.jpg';
import './Footer.css';
const Footer = () => {
  return (
	<div>
<Container fluid>
<Row>
<Col sx={12} sm={12} md={12} lg={12}>
<Image src={F} height={'300px'} width={'100%'}></Image>


{/* footer items insite the parent images */}

<Container  >
<Row className='foo'>
<Col className='items'  sx={12} sm={12} md={2} lg={2}>Certificate
<Container>
<Accordion className='bg-danger'>
  <Accordion.Item eventKey="0">
    <Accordion.Header sx={2} sm={2} md={2} lg={2} >SSL-Certificate</Accordion.Header>
    <Accordion.Body sx={2} sm={2} md={2} lg={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Hosting</Accordion.Header>
    <Accordion.Body>
    Website-Hosting
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</Container>





</Col>
<Col className='items' sx={12} sm={12} md={2} lg={2}>Ragistration</Col>
<Col className='items' sx={12} sm={12} md={2} lg={2}>Policy</Col>
<Col className='items' sx={12} sm={12} md={2} lg={2}>Address</Col>
<Col className='items' sx={12} sm={12} md={2} lg={2}>Payment</Col>
<Col className='items' sx={12} sm={12} md={2} lg={2}>Contact-Form</Col>

</Row>

</Container>

</Col>

</Row>

</Container>



</div>
  )
}

export default Footer