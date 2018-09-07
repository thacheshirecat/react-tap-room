import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <style jsx>{`
          h1 {
            margin-top: 15px;
            color: green;
            background-color: gold;
            text-align: center;
            font-family: Trebuchet MS;
          }
          button {
            color: gold;
            background-color: green;
          }
            `}</style>
          <h1>Greenfrog Tap Room</h1>
          <Link to='/'><button className='btn'>Home</button></Link>
    </div>
  )
}

export default Header;
