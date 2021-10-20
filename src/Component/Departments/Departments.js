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
    const {name, description, src} =  props.left;
    return (
        <div className="container card">
            <img className="image" src={src} alt="" />
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <button className="btn btn-info">Details</button>
        </div>
    );
};


export default Departments;
