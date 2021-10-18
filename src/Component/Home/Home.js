import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
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
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWwlMjBkb2N0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                            <Card.Title>Cardiology</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/vigilantly-monitoring-his-patients-vitals-picture-id592647720?b=1&k=20&m=592647720&s=170667a&w=0&h=QrmU3JvrT95eD8TS1xEJY6e2OloGEfshU-5KqPgchcQ=" />
                            <Card.Body>
                            <Card.Title>Gastroenterlogy</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/asian-chinese-female-doctor-working-on-medical-report-with-laptop-and-picture-id1309783183?b=1&k=20&m=1309783183&s=170667a&w=0&h=M9TeQBEjvv5b0E4SINbc5oFkTBYmi7-eo3RTTBDHjdk=" />
                            <Card.Body>
                            <Card.Title>Neurology</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className="container accorn">
                <div>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;