import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoLogoBuffer } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

function NavHeader({Toggle}) {
  return (
    <Navbar className="navbar navbar-expand-sm navbar-dark  bg-transparent">
      <Container>
        <Navbar.Brand href="#home" className="fw-5" onClick={Toggle}>
          <IoLogoBuffer /> Celz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler d-lg-none" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <form className="d-flex my-2 my-lg-0">
              <input type="text" className="form-control me-sm-2" placeholder="search" />
              <button className="btn btn-dark my-2 my-sm-0" type="submit">
               <IoMdSearch className="fs-5" />
              </button>
            </form>

            <NavDropdown title="" id="basic-nav-dropdown" className="dropdown-menu-start">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
