/**
 *
 * RegistrationContainer
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
import makeSelectRegistrationContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

import '../../styles/RegistrationStyles/style.css';
import '../../styles/RegistrationStyles/reset.css';

import runMain from '../../externalJS/RegistrationPage/main'; 
import runVelocity from '../../externalJS/RegistrationPage/velocity.min'; 

export class RegistrationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount(){
    runMain();
    runVelocity();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Arian Finance - Registration</title>
          <meta name="description" content="Description of RegistrationContainer" />
        </Helmet>
      </div>
    );
  }
}

RegistrationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registrationcontainer: makeSelectRegistrationContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registrationContainer', reducer });
const withSaga = injectSaga({ key: 'registrationContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegistrationContainer);
