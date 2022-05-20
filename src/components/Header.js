import React from "react";
import { Navbar, Container, Badge, Button, Nav } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Navbar</Navbar.Brand>
          </Link>
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Link to={"/cart"}>
            <Button variant="primary">
              <BsCartFill style={{ color: "#fff" }} />
              <Badge className="mx-2" bg="secondary">
                {cartItems.length}
              </Badge>
            </Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
