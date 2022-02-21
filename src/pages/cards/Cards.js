import React from 'react'
import { Container,Row,Col,Card,Button,Pagination} from 'react-bootstrap';
import Mobile from '../../assest/narzo-50a.jpeg';
import HP from '../../assest/hp-original.jpeg';
import './Cards.css';
const Cards = () => {
  return (
	<div>
<Container fluid className='cards'>
hhh
</Container>
<Container>
<Row>
{/* First cards */}
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Mobile}/>
  <Card.Body>
    <Card.Title>Realme C-20</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
{/* Second cards */}
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Mobile} />
  <Card.Body>
    <Card.Title>Realme C-50A</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <Button variant="success">Go to Site</Button>{' '}
  </Card.Body>
</Card></Col>
{/* 3rd card */}
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Mobile} />
  <Card.Body>
    <Card.Title>Narzo 50A</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
      <Button variant="danger">Go to Site</Button> 
  </Card.Body>
</Card></Col>
</Row>
</Container><br></br><br></br><hr></hr>
{/* pc details by cards container */}
<Container  className='bl'>
<Row>
<Col sx={12} sm={12} md={6} lg={8}>
<img src={HP}height={"300px"} width={"350px"}  /></Col>

<Col sx={12} sm={12} md={6} lg={4}>
Available offers
Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
Partner OfferSign up for Flipkart Pay Later <br></br>and get Flipkart Gift Card worth ₹100*Know More
Buy More, Save MoreBuy more and Save upto ₹15000See all productsT&C
EMI starting from ₹2,085/monthView Plans
Buy without Exchange
₹60,990
Buy with Exchange
up to ₹18,100 off
Enter pincode to check if exchange is available<br></br>
<Button variant="warning">Add to Cart</Button>{' '}
  <Button variant="danger">Buy Now</Button>
</Col>
</Row>
</Container><br></br><hr></hr>
{/* 2nd grid for the products */}
<Container  className='al'>
<Row>
<Col sx={12} sm={12} md={6} lg={8}>
<img src={HP} className='imagess'  height={"300px"} width={"350px"} /></Col>

<Col sx={12} sm={12} md={6} lg={4}>
Available offers
Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
Partner OfferSign up for Flipkart Pay Later <br></br>and get Flipkart Gift Card worth ₹100*Know More
Buy More, Save MoreBuy more and Save upto ₹15000See all productsT&C
EMI starting from ₹2,085/monthView Plans
Buy without Exchange
₹60,990
Buy with Exchange
up to ₹18,100 off
Enter pincode to check if exchange is available<br></br>
 <Button variant="warning">Add to Cart</Button>{' '}
  <Button variant="danger">Buy Now</Button>
</Col>
</Row>
</Container><hr></hr>
{/* Pagination */}



<Container>
<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>
<Pagination.Item >{2}</Pagination.Item>
<Pagination.Item >{3}</Pagination.Item>
<Pagination.Item >{4}</Pagination.Item>
<Pagination.Item >{5}</Pagination.Item>
<Pagination.Item >{6}</Pagination.Item>
<Pagination.Item >{7}</Pagination.Item>
<Pagination.Item >{8}</Pagination.Item>
<Pagination.Item >{9}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item >{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</Container>




</div>
  )
}

export default Cards