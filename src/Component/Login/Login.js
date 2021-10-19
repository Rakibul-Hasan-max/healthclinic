import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className=" container body">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <div>
                            <h2>Please Login</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">User Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                            <label htmlFor="" className="text-danger ms-2">Forgot your password?</label>
                        </div>
                        <div className="from-group mt-3">
                            <button className="btn btn-success" type="submit">Login</button>
                        </div>
                        <div className="from-group mt-5">
                            <button className="btn btn-primary" >Google Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
