// src/components/Card.js
import React from 'react';
import './Card.css'; // Ensure Card.css is correctly imported

const Card = ({ image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;