/**
 *
 * LoadingContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoadingContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

import '../../styles/LoadingStyles/LoadingPage/style.css';

const lock = new Auth0Lock(
  'fWoMdxejWduzgcOzHeOTi5JG63ck7pyx',
  'meetantariksh.auth0.com'
);

export class LoadingContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount(){
    if(!window.sessionStorage.getItem('non_db_authentication_token') || window.sessionStorage.getItem('non_db_authentication_token')==''){
      lock.on("authenticated", function(authResult) {
        lock.getUserInfo(authResult.accessToken, function(error, profile) {
          window.sessionStorage.setItem('non_db_authentication_token', authResult.accessToken);
          console.log(authResult.accessToken);
        });
    });
    }else{
      console.log(window.sessionStorage.getItem('non_db_authentication_token'));
    }
  }
  
  render() {
    return (
      <div className="loader-body">
        <h1>Cube Flipping Loader</h1>
        <div className="cube-wrapper">
          <div className="cube-folding">
            <span className="leaf1"></span>
            <span className="leaf2"></span>
            <span className="leaf3"></span>
            <span className="leaf4"></span>
          </div>
          <span className="loading" data-name="Loading">Loading</span>
        </div>
      </div>
    );
  }
}

LoadingContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loadingcontainer: makeSelectLoadingContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loadingContainer', reducer });
const withSaga = injectSaga({ key: 'loadingContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoadingContainer);
