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

import { 
  triggerOpenAnimation,
  triggerCloseAnimation,
} from '../../externalJS/RegistrationPage/main'; 
import runVelocity from '../../externalJS/RegistrationPage/velocity.min'; 

import GeneralUserRegistration from '../../components/RegistrationComponent/GeneralUserRegistration/Loadable';

export class RegistrationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      registrationGeneralUser: false,
      registrationGeneralUserClassName: '',
      registrationAgent: false,
      registrationDistributor: false,
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.toggleRegistrationGeneralUser = this.toggleRegistrationGeneralUser.bind(this);
  }

  componentDidMount(){
    runVelocity();
  }

  goToHomePage(){
    window.location.href = "/";
  }

  toggleRegistrationGeneralUser(){ 
    this.setState({
      registrationGeneralUser: !this.state.registrationGeneralUser,
      registrationGeneralUserClassName: (this.state.registrationGeneralUserClassName === '' ? 'selected-table empty-box':'')
    });
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
            
            <li>
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
                <a>Comming Soon</a>
              </footer>
            </li>

            <li className={this.state.registrationGeneralUserClassName}>
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
                <a onClick={this.toggleRegistrationGeneralUser}>Select</a>
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
                <a>Comming Soon</a>
              </footer>
            </li>
          </ul>

          {
            this.state.registrationGeneralUser && 
            <GeneralUserRegistration 
              triggerOpenAnimation = {triggerOpenAnimation}
              triggerCloseAnimation = {triggerCloseAnimation}
              closeForm = {this.toggleRegistrationGeneralUser}
            />
          }

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
