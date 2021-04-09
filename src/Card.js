import React from "react";
import "./Card.css";

function Card({ image, idx }) {
    return (
        <img style={{ top: `${idx * 10}px`, right: `${idx * 10}px` }} className='Card' src={image} alt=""></img>
    );
}

export default Card;

