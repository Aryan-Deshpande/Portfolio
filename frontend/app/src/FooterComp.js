import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';

function FooterComponent(){
    return(
        <Navbar bg="dark" variant="dark" className="justified-content-center" >
        <Container>
          <Navbar.Brand href="#aryan">Aryan Deshpande</Navbar.Brand>
          <Nav className='footer-font'>
            <Nav.Link href="#resume">Something is cooking</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default FooterComponent