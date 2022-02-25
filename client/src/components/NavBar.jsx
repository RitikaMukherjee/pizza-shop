import React from 'react';
import {Navbar,Nav,Container,Image} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
const NavBar = () => {
  return <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand>
            <Image src='images/logo.png' style={{height:"100px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to={"/login"} activeClassName>
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/cart"} activeClassName>
                    <Nav.Link><FaShoppingCart/></Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  </>;
};

export default NavBar;
