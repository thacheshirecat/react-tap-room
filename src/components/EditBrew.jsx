import React from 'react';
import PropTypes from 'prop-types';

function EditBrew(props)
{
  let _name = null;
  let _abv = null;
  let _brewer = null;
  let _price = null;
  let _remaining = null;
  let _description = null;


  return(
    <div className='card'>
      <style jsx>{`
          input, button, label {
            background-color: gold;
            color: green;
            justify-content: center;
            margin: auto;
            display: flex;
          }
      `}</style>
    <h2>Edit Brew: {props.selectedBrew.name}</h2>
      <htmlForm>
        <label htmlFor='newName'>Brew Name</label>
        <input
          type='text'
          name='newName'
          ref={(input) => {_name = input;}}
          placeholder={props.selectedBrew.name}
          required></input><br/>
        <label htmlFor='newAbv'>Alchohol Content</label>
        <input
          type='text'
          name='newAbv'
          ref={(input) => {_abv = input;}}
          placeholder={props.selectedBrew.abv}
          required /><br/>
        <label htmlFor='newBrewer'>Brewer Name</label>
        <input
          type='text'
          name='newBrewer'
          ref={(input) => {_brewer = input;}}
          placeholder={props.selectedBrew.brewer}
          required /><br/>
        <label htmlFor='newPrice'>Price</label>
        <input
          type='text'
          name='newPrice'
          ref={(input) => {_price = input;}}
          placeholder={props.selectedBrew.price}
          required /><br/>
        <label htmlFor='newAmount'>Amount Remaining</label>
        <input
          type='text'
          name='newAmount'
          ref={(input) => {_remaining = input;}}
          placeholder={props.selectedBrew.remaining}
          required /><br/>
        <label htmlFor='newDescription'>Description</label>
        <input
          type='text'
          name='newDescription'
          ref={(input) => {_description = input;}}
          placeholder={props.selectedBrew.description}
          required /><br/>
        <br/>
        <button type='submit'>Edit!</button>
      </htmlForm>
      <button type='click' onClick={() => {props.onCancelBrewEdit();}}>Cancel</button>
    </div>
  );
}

EditBrew.propTypes = {
  selectedBrew: PropTypes.object,
  onCancelBrewEdit: PropTypes.func
}

export default EditBrew;
