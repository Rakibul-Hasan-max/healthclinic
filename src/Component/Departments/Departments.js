import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Departments.css';

const Departments = () => {
    return (
        <div>
            <div className="data">
                <h1>Our services & depertments</h1>
                <p>We harness the strength of our multi-disciplinary teams to craft the perfect solutions for your illness.</p>
            </div>
            <Lefts></Lefts>
        </div>
    );
};

const Lefts = () => {
  const [lefts, setLefts] = useState([]);
  useEffect( () => {
    fetch('./Services.json')
    .then(res => res.json())
    .then(data => setLefts(data));
  } ,[])

  return(
    <div className="left">
        {
            lefts.map(left => <Left left={left} key={left.name}></Left>)
        }
      
    </div>
  )
}


const Left = (props) => {
    console.log(props.left);
    const {name, description} =  props.left;
    return (
        
        <div className="container">
            <div className="row">
                <div className="col g-3 mx-2 card none">
                    <h2>{name}</h2>
                    <p>Description: {description}</p>
                </div>
                <div class="col g-3 mx-2 card none">
                    <h2>{name}</h2>
                    <p>Description: {description}</p>
                </div>
            </div>
        </div> 
    );
};


export default Departments;
