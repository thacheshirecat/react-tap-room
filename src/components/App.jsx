import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import BrewList from './BrewList'
import Brew from './Brew'
import NewBrew from './NewBrew'
import About from './About'
import Error404 from './Error404'

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
            background-image: url(https://raw.githubusercontent.com/thacheshirecat/react-tap-room/master/src/assets/images/bg.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/brews' component={BrewList} />
        <Route exact path='/newbrews' component={NewBrew} />
        <Route exact path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
