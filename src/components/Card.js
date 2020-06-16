import React from 'react';
import '../App.css';

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.imageUrl} alt=""/>
            <p>Full Name: {props.firstName} {props.lastName}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Card;
