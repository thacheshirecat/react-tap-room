import React from 'react';
import { Link } from 'react-router-dom';

import BrewList from './BrewList';

function Admin(props)
{
  return (
    <div>
      <style jsx>{`
            h3 {
              text-align: center;
            }
      `}</style>
      <h2>Admin</h2>
      <h3><Link to='/admin/newbrew'>Add New Brew</Link></h3>
      <BrewList />
    </div>
  );
}

export default Admin;
