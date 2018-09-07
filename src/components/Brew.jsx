import React from 'react';
import PropTypes from 'prop-types';

function Brew(props){
  return(
    <div>
      <style jsx>{`
          div {
            background-color: gold;
            color: green;
          }
      `}</style>
      <h3>{props.name} / {props.abv}</h3>
      <p>By: {props.brewer}</p>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <p>Remaining Stock: {props.remaining}</p>
    </div>
  );
}

Brew.PropTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Brew;
