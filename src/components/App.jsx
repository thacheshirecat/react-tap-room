import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

import Header from './Header';
import Home from './Home';
import BrewList from './BrewList';
import About from './About';
import Admin from './Admin';
import NewBrew from './NewBrew';
import Error404 from './Error404';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      masterBrewList: {
        'a67gsd-a97yjd-hoj-huehuehue' : {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        '984fgon-z5b190-7dfmz-jajaja' : {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: '60'
        }
      },
      selectedBrew: null
    };
    this.handleAddingNewBrew = this.handleAddingNewBrew.bind(this);
    this.handleChangingSelectedBrew = this.handleChangingSelectedBrew.bind(this);
    this.handleSettingSelectedBrewToNull = this.handleSettingSelectedBrewToNull.bind(this);
    this.handleEditingSelectedBrew = this.handleEditingSelectedBrew.bind(this);
  }

  handleAddingNewBrew(newBrew)
  {
    let newBrewId = v4();
    let newMasterBrewList = Object.assign({}, this.state.masterBrewList, { [newBrewId]: newBrew });
    this.setState({masterBrewList: newMasterBrewList});
  }

  handleEditingSelectedBrew(edittedBrew)
  {
    this.state.masterBrewList[this.state.selectedBrew] = edittedBrew;
    this.setState({selectedBrew: null});
  }

  handleChangingSelectedBrew(brewId)
  {
    this.setState({selectedBrew: brewId});
  }

  handleSettingSelectedBrewToNull()
  {
    this.setState({selectedBrew: null});
  }


  render()
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
          <Route
            exact path='/brews'
            render={(props)=>
              <BrewList
                brewList={this.state.masterBrewList}
                currentRoute={props.location.pathname} />} />
          <Route exact path='/about' component={About} />
          <Route
            exact path='/admin'
            render={(props)=>
              <Admin
                brewList={this.state.masterBrewList}
                currentRoute={props.location.pathname}
                onChangingSelectedBrew={this.handleChangingSelectedBrew}
                handleEditBrewFormSubmit={this.handleEditingSelectedBrew}
                handleCancelBrewEdit={this.handleSettingSelectedBrewToNull}
                selectedBrew={this.state.selectedBrew} />} />
          <Route
            exact path='/admin/newbrew'
            render={()=>
              <NewBrew
                onNewBrewFormSubmit={this.handleAddingNewBrew} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
