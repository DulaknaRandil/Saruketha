
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Home() {
  return (
    
    <div>

<section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>Welcome to <span>Restaurantly</span></h1>
          <h2>Delivering great food for more than 18 years!</h2>

          <div class="btns">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
            <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></a>
        </div>

      </div>
    </div>
  </section>
     <div className="content">
        <h1>Welcome to Saruketha Restaurant</h1>
        <p>Explore our delicious menu and discover the best flavors in town.</p>
        <div>

        <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media-cdn.tripadvisor.com/media/photo-s/16/62/37/d2/magic-foods.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.themistakenman.com/wp-content/uploads/2022/08/fast-food-business.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/9e/05/d1/grilled-prawn.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
       
       
        {/* Add more content components as needed */}
      </div>

      <footer className="bg-dark text-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Contact Us</h5>
              {/* Add your contact icons or information */}
              <p>Email: example@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-6">
              <h5>Follow Us</h5>
              {/* Add your social media buttons with original colors */}
              <div className="social-icons">
                {/* Example icons, replace them with your social media icons */}
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-lg" style={{ color: '#1877f2', marginRight: '10px' }}></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg" style={{ color: '#1da1f2', marginRight: '10px' }}></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" style={{ color: '#c13584', marginRight: '10px' }}></i></a>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-3" />
          <div className="text-center">
            {/* Copyright statement */}
            <p>&copy; 2023 Saruketha Restaurant. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>

    
  
  );

}



export default Home;
