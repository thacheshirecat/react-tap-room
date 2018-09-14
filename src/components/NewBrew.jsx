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
          input, button {
            background-color: gold;
            color: green;
          }
      `}</style>
      <h2>Add a New Brew to the Tap Room</h2>
      <form onSubmit={handleNewBrewFormSubmit}>
        <label for='newName'>Brew Name</label><br/>
        <input
          type='text'
          name='newName'
          ref={(input) => {_name = input;}}
          required /><br/>
        <label for='newAbv'>Alchohol Content</label><br/>
        <input
          type='text'
          name='newAbv'
          ref={(input) => {_abv = input;}}
          required /><br/>
        <label for='newBrewer'>Brewer Name</label><br/>
        <input
          type='text'
          name='newBrewer'
          ref={(input) => {_brewer = input;}}
          required /><br/>
        <label for='newPrice'>Price</label><br/>
        <input
          type='text'
          name='newPrice'
          ref={(input) => {_price = input;}}
          required /><br/>
        <label for='newAmount'>Amount to Add</label><br/>
        <input
          type='text'
          name='newAmount'
          ref={(input) => {_remaining = input;}}
          required /><br/>
        <label for='newDescription'>Description</label><br/>
        <input
          type='text'
          name='newDescription'
          ref={(input) => {_description = input;}}
          required /><br/>
        <br/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

NewBrew.propTypes = {
 onNewBrewFormSubmit: PropTypes.func
};

export default NewBrew;
