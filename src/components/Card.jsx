import React from 'react';
import '../styles/Card.css';

const Card = ({ children }) => {
  return <div className='card-wrapper'>{children}</div>;
};

export default Card;
