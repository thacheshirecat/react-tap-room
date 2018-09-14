import React from 'react';
import PropTypes from 'prop-types';

import Brew from './Brew';

function BrewList(props)
{
  return(
    <div>
      <h2>Brews</h2>
      <hr />
        <h4>Today's Sales: ${props.sessionSales}</h4>
      <hr />
      {Object.keys(props.brewList).map(function(brewId) {
        var brew = props.brewList[brewId];
        return <Brew
          name={brew.name}
          brewer={brew.brewer}
          description={brew.description}
          abv={brew.abv}
          price={brew.price}
          remaining={brew.remaining}
          currentRoute={props.currentRoute}
          onBrewSelection={props.onBrewSelection}
          onSellPintButtonClicked={props.handleSellingPint}
          key={brewId}
          brewId={brewId}/>
      })}
    </div>
  );
}

BrewList.propTypes = {
  brewList: PropTypes.object,
  currentRoute: PropTypes.string,
  onBrewSelection: PropTypes.func,
  handleSellingPint: PropTypes.func,
  sessionSales: PropTypes.string
};

export default BrewList;
