

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbari() {
  return (
<>
      <Navbar bg="light" data-bs-theme="light" >
        <Container>
          <Navbar.Brand className='titulo'>Joyeria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/Contact">Contactos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbari
