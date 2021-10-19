import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="naved">
                <div>
                    <Link to ="/"><img className="logoname" src={logo} alt=""/></Link>
                </div>
                <nav>
                    <Link to ="/home">Home</Link>
                    <Link to ="/departments">Departments</Link>
                    <Link to ="/doctors">Doctors</Link>
                    <Link to ="/blog">Blog</Link>
                    <Link to ="/contact">Contact</Link>
                    <Link to ="/login">Login</Link>
                </nav>
            </div>
        </div>
    );
};


export default Header;