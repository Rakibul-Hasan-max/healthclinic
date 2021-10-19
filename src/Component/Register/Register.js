import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Register.css';

const Register = () => {

    const {signInUsingGoogle} = useFirebase();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleEmailChange = e =>{
    setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
    setPassword(e.target.value);
    }

    const handleRegistration = e => {
    e.preventDefault();
	console.log(email, password);
    const auth = getAuth();
    if(password.length < 6) {
        setError('Password should be at least 6 characters')
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
        const user = result.user;
        console.log(user);
    })
    }


    return (
        <div>
            <div className=" container body">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <div onSubmit={handleRegistration}>
                            <div>
                            <h2>Please Register</h2>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input onBlur={handleEmailChange} type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Address</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input onBlur={handlePasswordChange} type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                                <Link className="ms-2" to="/login">Already Registered?</Link>
                            </div>
                            <div className="text-danger">{error}</div>
                            <div className="from-group mt-3">
                                <button onClick={handleRegistration} className="btn btn-success" type="submit">Register</button>
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

export default Register;
