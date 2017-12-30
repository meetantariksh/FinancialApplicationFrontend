/**
 *
 * GeneralUserDashBoard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGeneralUserDashBoard from './selectors';
import reducer from './reducer';
import saga from './saga';

export class GeneralUserDashBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home - Arian Finance</title>
          <meta name="description" content="Description of GeneralUserDashBoard" />
        </Helmet>
        <h1>This is the user dashboard of the client.</h1>
      </div>
    );
  }
}

GeneralUserDashBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  generaluserdashboard: makeSelectGeneralUserDashBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'generalUserDashBoard', reducer });
const withSaga = injectSaga({ key: 'generalUserDashBoard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GeneralUserDashBoard);
