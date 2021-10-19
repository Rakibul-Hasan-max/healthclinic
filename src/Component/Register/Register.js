import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Register.css';

const Register = () => {

    const {signInUsingGoogle} = useFirebase();

    return (
        <div>
            <div className=" container body">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <div>
                            <h2>Please Register</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                            <Link className="ms-2" to="/login">Already Registered?</Link>
                        </div>
                        <div className="from-group mt-3">
                            <button className="btn btn-success" type="submit">Register</button>
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
