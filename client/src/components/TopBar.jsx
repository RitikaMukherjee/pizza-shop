import React from 'react';
import {Navbar,Nav,Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {MdLocalOffer} from "react-icons/md"
const TopBar = () => {
  return <>
    <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
            <Nav>
                <LinkContainer to="/" activeClassName>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about" activeClassName>
                  <Nav.Link >About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" activeClassName>
                  <Nav.Link >Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policy" activeClassName>
                  <Nav.Link>Terms and Policy</Nav.Link>
                </LinkContainer>
                <h6 style={{marginLeft:"630px",marginTop:"10px",color:"white"}}><MdLocalOffer/>Free home delivery above order rs. 500/-</h6>
            </Nav>
        </Container>
    </Navbar>
  </>;
};
export default TopBar;