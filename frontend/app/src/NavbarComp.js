import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';

function NavbarComp(){
    return(
        <Navbar bg="light" variant="light" className="justified-content-center" fixed='top'>
        <Container>
          <Navbar.Brand href="#aryan">Aryan Deshpande</Navbar.Brand>
          <Nav>
            <Nav.Link href="#projects" onClick={() => window.location.replace("/#projects")}>Projects</Nav.Link>
            <Nav.Link href="#blogs" onClick={() => window.location.replace("/#blogs")}>Blogs</Nav.Link>
            <Nav.Link href="#stack" onClick={() => window.location.replace("/#stack")}>Stack</Nav.Link>
            <Nav.Link href="https://cdn.discordapp.com/attachments/835750351621718030/1083423477979164772/Text_to_Image_Synthesis_for_Improved_Image_Captioning.pdf">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComp;