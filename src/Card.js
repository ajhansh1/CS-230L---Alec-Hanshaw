import React from 'react';

const Card = ({ color, title }) => {
  return (
    <div className="card mx-3" style={{ backgroundColor: color }}>
      <div className="card-body">
        <h5 className="card-title text-light mb-3">Card {title}</h5>
        <hr className="text-light" style={{opacity: '0.3'}} />
        <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default Card;