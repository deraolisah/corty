import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';



const Card = ({ product }) => {
  const { id, name, imageUrl, price, description } = product;

  return (
    <Link className="card" to={`/${id}`}>
      <div className='card-img'>
        <img id={id} src={imageUrl} alt={name} />
      </div>
      
      <div className="card-body">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;