import React from 'react';
import "./navbar.css"
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
const Home = () =>{
  const navbar=["Home","About","Skills","Experience","Education","Projects","Contact"];
  return (
    <div>
      {/* <nav className='navbar'>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
      </nav> */}
       <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" style={{height:"70px"}}>
      <Navbar.Brand href="#home">
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"  className='bg-dark' style={{color:"white" ,justifyContent: "center"}}>
        <Nav className="mr-auto">
          <Nav.Link style={{margin:"13px"}} href="/" >Home</Nav.Link>
          <Nav.Link style={{margin:"13px"}} href="/about">About</Nav.Link>
          <Nav.Link style={{margin:"13px"}} href="/skills">Skills</Nav.Link>
          <Nav.Link style={{margin:"13px"}} href="/experience">Experience</Nav.Link>
          <Nav.Link style={{margin:"13px"}} href="/education">Education</Nav.Link>
          <Nav.Link style={{margin:"13px"}} href="/projects">Projects</Nav.Link>
          <Nav.Link style={{margin:"13px"}} href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Outlet/>
    </div>
  )
}
export default Home;
