/**
 *
 * RegistrationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { push } from 'react-router-redux';
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
  constructor(props){
    super(props);
    this.goToHomePage = this.goToHomePage.bind(this);
  }

  componentWillMount(){
    runMain();
    runVelocity();
  }

  goToHomePage(){
    this.props.dispatch(push('/'));
  }

  render() {
    return (
      <div className="body-class">
        <Helmet>
          <title>Arian Finance - Registration</title>
          <meta name="description" content="Description of RegistrationContainer" />
        </Helmet>
        <header className="cd-main-header">
          <h1 style={{paddingTop: '50px', paddingBottom: '25px'}}>Arian Finance Registration</h1>
          <a onClick={this.goToHomePage}><h2>Return To Home Page</h2></a>
        </header>
        <div className="body-class">
          <ul className="cd-pricing">
            
            <li style={{display: 'hide'}}>
              <header className="cd-pricing-header">
                <h2>General</h2>
                <h2>Insurance</h2>
              </header>

              <div className="cd-pricing-features">
                <ul>
                  <li className="available"><em>Feature 1</em></li>
                  <li className="available"><em>Feature 2</em></li>
                  <li className="available"><em>Feature 3</em></li>
                  <li className="available"><em>Feature 4</em></li>
                </ul>
              </div>

              <footer className="cd-pricing-footer">
                <a href="#0">Select</a>
              </footer>
            </li>

            <li>
              <header className="cd-pricing-header">
                <h2>Mutual</h2>
                <h2>Funds</h2>
              </header>

              <div className="cd-pricing-features">
                <ul>
                  <li className="available"><em>Feature 1</em></li>
                  <li className="available"><em>Feature 2</em></li>
                  <li className="available"><em>Feature 3</em></li>
                  <li className="available"><em>Feature 4</em></li>
                </ul>
              </div>

              <footer className="cd-pricing-footer">
                <a href="#0">Select</a>
              </footer>
            </li>

            <li>
              <header className="cd-pricing-header">
                <h2>Life</h2>
                <h2>Insurance</h2>
              </header>

              <div className="cd-pricing-features">
                <ul>
                  <li className="available"><em>Feature 1</em></li>
                  <li className="available"><em>Feature 2</em></li>
                  <li className="available"><em>Feature 3</em></li>
                  <li className="available"><em>Feature 4</em></li>
                </ul>
              </div>
              <footer className="cd-pricing-footer">
                <a href="#0">Select</a>
              </footer>
            </li>


          </ul> 
        </div>
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
