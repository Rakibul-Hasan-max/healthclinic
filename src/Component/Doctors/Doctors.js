import React from 'react';
import './Doctors.css';

const Doctors = () => {
    return (
        <div>
            <div className="doctorhead">
                <h5>How we help</h5>
                <h1>Our Expert Doctors</h1>
                <p>Get energizing workout moves, healthy recipes, and advice on losing weight and feeling great from Health.</p>
            </div>
            <div className="docimg">
                <div>
                    <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                    <h4>Dr. Scott. M. Aaronson</h4>
                    <p>Medicine Specialist</p>
                </div>
                <div>
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQ-TfQ3t1-kxvAZ1P7eg7eS78fYMHfgiuFwbbph=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <h4>Dr. Carter. G. Abel</h4>
                    <p>Skin Specialist</p>
                </div>
                <div>
                    <img src="https://i2-prod.mirror.co.uk/interactives/article12645227.ece/ALTERNATES/s1200c/doctor.jpg" alt="" />
                    <h4>Dr. A. Reese Abright</h4>
                    <p>Heart Specialist</p>
                </div>
                <div>
                    <img src="https://cdn3.poz.com/24954_Doctor-Patient-iStock-92723315-XLARGE.jpg_67e4ea75-849c-419d-b32b-8970f8ae05a7_x2.jpeg" alt="" />
                    <h4>Dr. Khalid Abbed</h4>
                    <p>Neurologists</p>
                </div>
                <div>
                    <img src="https://www.tidalhealth.org/sites/default/files/site_media/2021-01/doctor.jpg" alt="" />
                    <h4>Dr. Fouad. M</h4>
                    <p>Cancer Specialist</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0Wbi-feySIkHctDz6oKp3jcLY_OWg24vomvdihCQ2NXTCVicrj6nk-DE--ivjCPor1U&usqp=CAU" alt="" />
                    <h4>Dr. Mark. F</h4>
                    <p>Dermatologists</p>
                </div>
            </div>
        </div>
    );
};

export default Doctors;