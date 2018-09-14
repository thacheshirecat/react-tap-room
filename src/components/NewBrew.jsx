import React from 'react';
import PropTypes from 'prop-types';

function NewBrew(props)
{
  let _name = null;
  let _abv = null;
  let _brewer = null;
  let _price = null;
  let _remaining = null;
  let _description = null;

function handleNewBrewFormSubmit(event)
{
  event.preventDefault();
  props.onNewBrewFormSubmit({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value});
  _name.value = '';
  _abv.value = '';
  _brewer.value = '';
  _price.value = '';
  _remaining.value = '';
  _description.value = '';
}

  return(
    <div>
      <style jsx>{`
          input, button, label {

            color: green;
            justify-content: center;
            margin: auto;
            display: flex;
          }
          input, button {
            background-color: gold;
          }
      `}</style>
      <h2>Add a New Brew to the Tap Room</h2>
      <form onSubmit={handleNewBrewFormSubmit}>
        <label htmlFor='newName'>Brew Name</label>
        <input
          type='text'
          name='newName'
          ref={(input) => {_name = input;}}
          required /><br/>
        <label htmlFor='newAbv'>Alchohol Content</label>
        <input
          type='text'
          name='newAbv'
          ref={(input) => {_abv = input;}}
          required /><br/>
        <label htmlFor='newBrewer'>Brewer Name</label>
        <input
          type='text'
          name='newBrewer'
          ref={(input) => {_brewer = input;}}
          required /><br/>
        <label htmlFor='newPrice'>Price</label>
        <input
          type='text'
          name='newPrice'
          ref={(input) => {_price = input;}}
          required /><br/>
        <label htmlFor='newAmount'>Amount to Add</label>
        <input
          type='text'
          name='newAmount'
          ref={(input) => {_remaining = input;}}
          required /><br/>
        <label htmlFor='newDescription'>Description</label>
        <input
          type='text'
          name='newDescription'
          ref={(input) => {_description = input;}}
          required /><br/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

NewBrew.propTypes = {
 onNewBrewFormSubmit: PropTypes.func
};

export default NewBrew;
