import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import BrewList from './BrewList'
import Brew from './Brew'

function App()
{
  return (
    <div className="container">
      <style jsx global>{`
          h2 {
            margin-top: 10px;
            color: green;
            text-align: center;
          }
          .card {
            background-color: gold;
            padding: 10px;
          }
          body {
            background-image: url("../assets/images/bg.jpg");
            background-repeat: no-repeat;
            background-size: cover;
          }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/brews' component={BrewList} />
      </Switch>
    </div>
  );
}

export default App;
