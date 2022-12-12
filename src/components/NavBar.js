import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Star Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">All Movies</Nav.Link>
            <Nav.Link href="/newmovies">New Movies</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavBar
