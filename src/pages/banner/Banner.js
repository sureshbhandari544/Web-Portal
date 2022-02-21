// SBI logo banner

import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import B from '../../assest/SBI.jpg';
import './Banner.css';
const Banner = () => {
  return (
	<div>
<Container>
<Row>
<Col sx={12} sm={12} md={12} lg={12}>
<img src={B} height={"300px"} width={"100%"}/>
<Container className='btn'>
<Row>
<Col><Button variant="warning">Ragistration</Button>{' '}
  <Button variant="success">Profile</Button>{' '}
 <Button variant="danger">Login-Here</Button>

</Col>

</Row>

</Container>



</Col>
</Row>
</Container></div>
  )
}

export default Banner;