import React from 'react';
import PropTypes from 'prop-types';

function Brew(props){

  const brewInfo =
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
  </div>;

  if (props.currentRoute === '/brews')
  {
    return (
      <div>
      <style jsx>{`
          .btn {
            display: flex;
            justify-content: center;
            margin: auto;
            width: 50%;
          }
      `}</style>
        {brewInfo}
        <button className='btn btn-danger'>Sell Pint</button>
        <hr />
      </div>
    );
  }
  else
  {
    return (
      <div>
      <style jsx>{`
          .btn {
            display: flex;
            justify-content: center;
            margin: auto;
            width: 50%;
          }
      `}</style>
        {brewInfo}
        <button
          onClick={() =>
            {props.onBrewSelection(props.brewId);}}
            className='btn btn-warning'>
            Edit Brew</button>
        <hr />
      </div>
    );
  }

}

Brew.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  brewId: PropTypes.string.isRequired,
  onBrewSelection: PropTypes.func
};

export default Brew;
