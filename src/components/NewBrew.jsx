import React from 'react';

function NewBrew(){
  return(
    <div>
      <style jsx>{`
          input, textarea, button {
            background-color: gold;
            color: green;
          }
      `}</style>
      <h2>Add a New Brew to the Tap Room</h2>
      <form>
        <label for='newName'>Brew Name</label><br/>
        <input type='text' name='newName'></input><br/>
        <label for='newAbv'>Alchohol Content</label><br/>
        <input type='text' name='newAbv'></input><br/>
        <label for='newBrewer'>Brewer Name</label><br/>
        <input type='text' name='newBrewer'></input><br/>
        <label for='newPrice'>Price</label><br/>
        <input type='text' name='newPrice'></input><br/>
        <label for='newAmount'>Amount to Add</label><br/>
        <input type='text' name='newAmount'></input><br/>
        <label for='newDescription'>Description</label><br/>
        <textarea name='newDescription'></textarea><br/>
        <br/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

export default NewBrew;
