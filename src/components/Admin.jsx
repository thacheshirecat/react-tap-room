import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BrewList from './BrewList';

function Admin(props)
{
  console.log(props.brewList)
  return (
    <div>
      <style jsx>{`
            h3 {
              text-align: center;
            }
      `}</style>
      <h2>Admin</h2>
      <h3><Link to='/admin/newbrew'>Add New Brew</Link></h3>
      <BrewList brewList={props.brewList} />
    </div>
  );
}

Admin.propTypes = {
  brewList: PropTypes.object,
  currentRoute: PropTypes.string
};

export default Admin;
