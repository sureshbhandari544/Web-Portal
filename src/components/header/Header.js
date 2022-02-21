import React from 'react';
import{Navbar,Nav,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
// import './Header.css';
const Header = () => {
  return (
	<div >
<Navbar  bg="primary" expand="lg">
  <Container fluid className='cont' >
    <Navbar.Brand href="#" class="top-header">Web-Portal</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Login</Nav.Link>
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Website-Design</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Graphics-Design</NavDropdown.Item>
<NavDropdown.Item href="#action3">Software-Engineer</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Ethical-Hacking</NavDropdown.Item>
<NavDropdown.Item href="#action4">Website-Testing</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5"> Search-Engine-Optimization </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">About-Us</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
           
        />
        <Button variant="outline-success bg-danger text-white border" class='btn'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


</div>
  )
}

export default Header