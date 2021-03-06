import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BrewList from './BrewList';
import EditBrew from './EditBrew';

function Admin(props)
{

  let editBrewSection = null;
  if(props.selectedBrew != null)
  {
    editBrewSection = <EditBrew
      selectedBrew={props.brewList[props.selectedBrew]}
      onBrewFormSubmit={props.handleEditBrewFormSubmit}
      onCancelBrewEdit={props.handleCancelBrewEdit} />;
  }
  else
  {
    editBrewSection = null;
  }
  return (
    <div>
      <style jsx>{`
            h3 {
              text-align: center;
            }
      `}</style>
      <h2>Admin</h2>
      <h3><Link to='/admin/newbrew'>Add New Brew</Link></h3>
      {editBrewSection}
      <BrewList
        brewList={props.brewList}
        onBrewSelection={props.onChangingSelectedBrew}
        sessionSales={props.sessionSales} />
    </div>
  );
}

Admin.propTypes = {
  brewList: PropTypes.object,
  currentRoute: PropTypes.string,
  onChangingSelectedBrew: PropTypes.func.isRequired,
  handleEditBrewFormSubmit: PropTypes.func.isRequired,
  handleCancelBrewEdit: PropTypes.func.isRequired,
  selectedBrew: PropTypes.string,
  sessionSales: PropTypes.string
};

export default Admin;
