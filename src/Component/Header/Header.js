import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';


const Header = () => {
    const {user, logout} = useFirebase();
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
                    <Link to ="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    {user?.email && <button onClick={logout} >Logout</button>}
                </nav>
            </div>
        </div>
    );
};


export default Header;
