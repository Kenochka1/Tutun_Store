import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/images/logo.PNG";
import user from "../../Assets/images/user.svg";
import shopcart from "../../Assets/images/shopcart.png";
import { Badge } from "@mui/material";
import { cartContext } from "../../Context/CartContext";
import LiveSearch from "../../LiveSerch/LiveSearch";

const Navbars = () => {
  const { cartLenght } = React.useContext(cartContext);

  return (
    <div className="container__navbar">
      <Navbar className="navbar__items" expand="lg" data-aos="fade-down">
        <Container fluid>
          <img id="logo" src={logo} alt="logo" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action1">Home</Nav.Link>
              </NavLink>
              <NavLink to="/list" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action2">Product</Nav.Link>
              </NavLink>
              <NavLink to="/aboutus" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action3">About us</Nav.Link>
              </NavLink>
              <NavLink to="/add" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action4">Add Product</Nav.Link>
              </NavLink>
            </Nav>
            <div className="navbar__items">
              <NavLink to="/login">
                <img id="user" src={user} alt="user" />
              </NavLink>
              <NavLink to="/cart" style={{ textDecoration: "none" }}>
                <Badge id="shop" badgeContent={cartLenght} color="error">
                  <h4 id="cart">🛒</h4>
                </Badge>
              </NavLink>
            </div>
            <LiveSearch />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
