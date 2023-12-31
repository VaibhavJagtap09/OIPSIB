import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import { logoutUser } from "../actions/userAction";
const NavBar = () => {
//   const dispatch = useDispatch();
//   const cartState = useSelector((state) => state.cartReducer);
//   const userState = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="images/logo.jpg"
              alt="logo"
              style={{ height: "80px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to="/CustomPizza">
                  <Nav.Link>Custom Pizza</Nav.Link>
                </LinkContainer>
              
                <LinkContainer to="/Login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              

              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;