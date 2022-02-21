import React from 'react'
import { Container, Row,Col,ProgressBar} from 'react-bootstrap';
import Pro from '../../assest/hacker.jpg';
import './Profile.css';

const Profile = () => {
  return (
	<div>
<Container className='pic'>
     <Row>
<Col className='scrtxt' sx={12} sm={12} md={12} lg={12}>  1600 Rosecrans Avenue, Manhattan Beach, California 90266 -  +1 (310) 560-4675
#6 of 10 Top...<ProgressBar>
  <ProgressBar striped variant="success" now={35} key={1} />
  <ProgressBar variant="warning" now={20} key={2} />
  <ProgressBar striped variant="danger" now={10} key={3} />
</ProgressBar> Custom Website Design Firms of 2022 - Isadora Agency is an award-winning digital marketing company. 
Some of the services that you..<img src={Pro} height={'100px'} width={'200px'}></img> can get from this company is website audits, website design, web analytics, visual design, information architecture, consumer research and workflow design. This company knows that there are multiple approaches that can be used when it comes to digital marketing. That is why they will listen to your needs,
 goals and concerns so that they can come up with the plan that works best for you.

</Col>

</Row>

</Container>
</div>
  )
}

export default Profile