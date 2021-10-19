import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const {signInUsingGoogle} = useFirebase();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmailChange = e =>{
    setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
    setPassword(e.target.value);
    }

    const handleRegistration = e => {
	console.log(email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
        const user = result.user;
        console.log(user);
    })
    e.preventDefault();
    }

    return (
        <div>
            <div className=" container body">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <div onSubmit={handleRegistration}>
                            <div>
                            <h2>Please Login</h2>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">User Email</label>
                                <input onBlur={handleEmailChange} type="text" required className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input onBlur={handlePasswordChange} type="password" required className="form-control" />
                            </div>
                            <div className="form-group">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                                <label htmlFor="" className="text-danger ms-2">Forgot your password?</label>
                                <Link className="ms-5" to="/register">Register now</Link>
                            </div>
                            <div className="from-group mt-3">
                                <button onClick={handleRegistration} className="btn btn-success" type="submit">Login</button>
                            </div>
                        </div>
                        <div className="from-group mt-5">
                            <button onClick={signInUsingGoogle} className="btn btn-primary" >Google Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
