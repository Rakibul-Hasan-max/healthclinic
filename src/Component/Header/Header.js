import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        < >
        <Navbar></Navbar>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block height"
                src="https://media.istockphoto.com/photos/three-doctors-woman-in-hijab-and-two-men-in-medical-apparel-patients-picture-id1335258478?b=1&k=20&m=1335258478&s=170667a&w=0&h=DTJXO34uhCFf5_ALJe2xcabLIJfvkNapwL53HN8NYUg="
                alt="First slide"
                />
                <Carousel.Caption className="text">
                <h3>Health is everything</h3>
                <h1>Health should be your top priority</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="btn btn-info">Contact Us</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block  height"
                src="https://media.istockphoto.com/photos/doctors-and-nurses-taking-care-of-patients-in-icu-picture-id1254958416?b=1&k=20&m=1254958416&s=170667a&w=0&h=h0EeHg18gYo5Qd0jiClnJJOU9WW4XqFVYGOOyZksdXs="
                alt="Second slide"
                />

                <Carousel.Caption className="text">
                <h3>Health is everything</h3>
                <h1>Health should be your top priority</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <button className="btn btn-info">Contact Us</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block height"
                src="https://media.istockphoto.com/photos/people-walking-in-and-out-of-the-hospital-picture-id1248607560?b=1&k=20&m=1248607560&s=170667a&w=0&h=DJC7KRUXTvR1CubtVU9CJ37w24eP5ND-ia3pXnPmwlA="
                alt="Third slide"
                />

                <Carousel.Caption className="text">
                <h3>Health is everything</h3>
                <h1>Health should be your top priority</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="btn btn-info">Contact Us</button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </ >
    );
};


const Navbar = () => {
    return (
        <div className="nav">
            <div>
                <Link to ="/"><img className="logoname" src={logo} alt=""/></Link>
            </div>
            <nav>
                <Link className="linked" to ="/home">Home</Link>
                <Link className="linked" to ="/about">About</Link>
                <Link className="linked" to ="/departments">Departments</Link>
                <Link className="linked" to ="/doctors">Doctors</Link>
                <Link className="linked" to ="/blog">Blog</Link>
                <Link className="linked" to ="/contact">Contact</Link>
            </nav>
        </div>
    );
};


export default Header;