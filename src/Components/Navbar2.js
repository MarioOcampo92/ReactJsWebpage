import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../App.css'

function NavbarR() {
  return (
    <Navbar bg="" expand="lg" className='position-fixed w-100' style={{ zIndex: 1, backgroundColor:'#196fc2'}} >
      <Container >
        <Navbar.Brand style={{color:'#FFF'}} href="#home">Mario</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#social" style={{color:'#FFF'}}>Social Media</Nav.Link>
            <NavDropdown style={{color:'#FFF'}} title="Apis" id="basic-nav-dropdown" color='#FFF'>
              <NavDropdown.Item href="#action/3.np1" >
                Pokiman
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Rick and morty
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarR;