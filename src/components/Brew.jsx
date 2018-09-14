import React from 'react';
import PropTypes from 'prop-types';

function Brew(props){
  return(
    <div className='card'>
      <style jsx>{`
          .card {
            margin: auto;
            width: 50%;
          }
      `}</style>
      <h3>{props.name} / {props.abv}</h3>
      <p>{props.description}</p>
      <p>By: {props.brewer}</p>
      <p>Price: ${props.price} per Pint</p>
      <p>Remaining Stock: {props.remaining} Pints</p>
      <button className='btn btn-danger'>Sell Pint</button><button className='btn btn-warning'>Edit Brew</button>
    </div>
  );
}

Brew.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Brew;
