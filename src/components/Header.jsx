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
            border: 1px solid yellow;
          }
          button {
            color: gold;
            background-color: green;
          }
      `}</style>
      <h1>Greenfrog Tap Room</h1>
      <Link to='/'><button className='btn'>Home</button></Link> ~ <Link to='/brews'><button className='btn'>Brews</button></Link> ~ <Link to='/about'><button className='btn'>About Us</button></Link> ~ <Link to='/admin'><button className='btn'>Admin</button></Link>
    </div>
  );
}

export default Header;
