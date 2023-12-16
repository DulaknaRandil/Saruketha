
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Catering from './components/Catering';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import { Navbar, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import '@fortawesome/fontawesome-free/css/all.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <Router>
    <div>
      {/* Navigationc Bar */}
      <Navbar bg="dark" collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Navbar.Brand href="#home"><div className='content'><span className="logo">Saru</span>ketha</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler-icon " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
          className='me-auto'></Nav>
          
          <Nav className="  nav-alignment">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/catering">Catering</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Button variant=" res-btn-out  nav-alignment" size="sm">Make a Booking</Button>
          </Nav>
          
          <Nav className='content-container'></Nav>
        </Navbar.Collapse>
      </Navbar>

    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      {/* Content components */}
     </div>
    </Router>
    
  
  );

}



export default App;
