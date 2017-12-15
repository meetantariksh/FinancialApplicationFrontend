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

export class LoadingContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Cube Flipping Loader</h1>
        <div class="cube-wrapper">
        <div class="cube-folding">
          <span class="leaf1"></span>
          <span class="leaf2"></span>
          <span class="leaf3"></span>
          <span class="leaf4"></span>
        </div>
        <span class="loading" data-name="Loading">Loading</span>
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
