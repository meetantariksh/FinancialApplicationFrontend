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

  componentDidMount(){
    runVelocity();
    runMain();
  }

  goToHomePage(){
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Arian Finance - Registration</title>
          <meta name="description" content="Description of RegistrationContainer" />
        </Helmet>
        <header className="cd-main-header">
          <h1 style={{paddingTop: '50px', paddingBottom: '25px'}}>Arian Finance Registration</h1>
          <a onClick={this.goToHomePage}><h2>Return To Home Page</h2></a>
        </header>
          <ul className="cd-pricing">
            
            <li style={{display: 'hide'}}>
              <header className="cd-pricing-header">
                <h2>Agent</h2>
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
                <h2>General User</h2>
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
                <h2>Distributor</h2>
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


          <div className="cd-form">
		
            <div className="cd-plan-info">
            </div>

            <div className="cd-more-info">
              <h3>Need help?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            
            <form action="">
              <fieldset>
                <legend>Account Info</legend>
                
                <div className="half-width">
                  <label htmlFor="userName">Name</label>
                  <input type="text" id="userName" name="userName"/>
                </div>
                
                <div className="half-width">
                  <label htmlFor="userEmail">Email</label>
                  <input type="email" id="userEmail" name="userEmail" />
                </div>
                
                <div className="half-width">
                  <label htmlFor="userPassword">Password</label>
                  <input type="password" id="userPassword" name="userPassword" />
                </div>
                
                <div className="half-width">
                  <label htmlFor="userPasswordRepeat">Repeat Password</label>
                  <input type="password" id="userPasswordRepeat" name="userPasswordRepeat" />
                </div>
              </fieldset>

              <fieldset>
                <legend>Payment Method</legend>
                
                <div>
                  <ul className="cd-payment-gateways">
                    <li>
                      <input type="radio" name="payment-method" id="paypal" value="paypal" />
                      <label htmlFor="paypal">Paypal</label>
                    </li>
                    
                    <li>
                      <input type="radio" name="payment-method" id="card" value="card" checked />
                      <label htmlFor="card">Card</label>
                    </li>
                  </ul>
                </div>
                
                <div className="cd-credit-card">
                  <div>
                    <p className="half-width">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input type="text" id="cardNumber" name="cardNumber" />
                    </p>

                    <p className="half-width">
                      <label>Expiration date</label>
                      <b>
                        <span className="cd-select">
                          <select name="card-expiry-month" id="card-expiry-month">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                            <option value="1">7</option>
                            <option value="1">8</option>
                            <option value="1">9</option>
                            <option value="1">10</option>
                            <option value="1">11</option>
                            <option value="1">12</option>
                          </select>
                        </span>

                        <span className="cd-select">
                          <select name="card-expiry-year" id="card-expiry-year">
                            <option value="2015">2015</option>
                            <option value="2015">2016</option>
                            <option value="2015">2017</option>
                            <option value="2015">2018</option>
                            <option value="2015">2019</option>
                            <option value="2015">2020</option>
                          </select>
                        </span>
                      </b>
                    </p>
                    
                    <p className="half-width">
                      <label htmlFor="cardCvc">Card CVC</label>
                      <input type="text" id="cardCvc" name="cardCvc" />
                    </p>
                  </div>
                </div>
              </fieldset>
              
              <fieldset>
                <div>
                  <input type="submit" value="Get started" />
                </div>
              </fieldset>
            </form>

            <a href="#0" className="cd-close"></a>
          </div>
          <div className="cd-overlay"></div>

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
