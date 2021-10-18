import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="mediciva">
                <h2>Your health partner</h2>
                <p>From testing for patients and staff, to enhanced safety measures, to telemedicine. We are making sure that you are able.</p>
            </div>
            <div className="container carded">
                <div className="card">
                    <h3>24/7 Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, exercitationem. Itaque, consectetur atque. Maxime, nesciunt.</p>
                </div>
                <div className="card">
                    <h3>Special Care</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, exercitationem. Itaque, consectetur atque. Maxime, nesciunt.</p>
                </div>
                <div className="card">
                    <h3>Quality Doctors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, exercitationem. Itaque, consectetur atque. Maxime, nesciunt.</p>
                </div>
            </div>
            <div>
                <div className="mediciva">
                    <h2>Depertments & Services</h2>
                    <p>Common hospital support units include a dispensary or pharmacy, pathology, and radiology, and on the non-medical side.</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;