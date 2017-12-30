/**
 *
 * GeneralUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import UserDashboard from './GeneralUserDashBoard/Loadable';

import {ProtectedRoute} from '../../../components/AuthenticationGuard';


export class GeneralUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Setup Component for General User</h1>
        <Switch>
          <ProtectedRoute exact path="/user" component={UserDashboard} />
          <ProtectedRoute exact path="/user/home" component={UserDashboard} />
        </Switch>
      </div>
    );
  }
}

GeneralUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(GeneralUser);
