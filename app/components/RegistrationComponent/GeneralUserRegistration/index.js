/**
*
* GeneralUserRegistration
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class GeneralUserRegistration extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      stepNumber: 1,
      stepDescription: 'Please enter your email address.',
      submitButtonText: 'Continue',
    };
    this.closeComponent = this.closeComponent.bind(this);
  }

  componentDidMount(){
    this.props.triggerOpenAnimation();
  }

  closeComponent(){
    this.props.triggerCloseAnimation();
    setTimeout(this.props.closeForm, 800);
  }

  submitFormStepOne(evt){
    evt.preventDefault();
    return false;
  }

  render() {
    return (
          <div className="cd-form">
      
              <div className="cd-plan-info">
              </div>

              <div className="cd-more-info">
                <h3>Step {this.state.stepNumber}</h3>
                <p>{this.state.stepDescription}</p>
              </div>

              {
                this.state.stepNumber == 1 &&
                <form onSubmit={this.submitFormStepOne}>
                  <fieldset>
                    <legend>Email</legend>
                    
                    <div className="half-width">
                      <label htmlFor="userEmail">Email</label>
                      <input type="email" id="userEmail" name="userEmail" />
                    </div>
                    
                    <div className="half-width">
                      <label htmlFor="userEmail">Confirm Email</label>
                      <input type="email" id="userEmail" name="userEmail" />
                    </div>
                    
                  </fieldset>

                  <fieldset>
                    <div>
                      <input type="submit" value={this.state.submitButtonText} />
                    </div>
                  </fieldset>
                </form>

              }

              <a onClick={this.closeComponent} className="cd-close"></a>
            </div>
    );
  }
}

GeneralUserRegistration.propTypes = {
  triggerOpenAnimation: PropTypes.func.isRequired,
  triggerCloseAnimation: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired
};

export default GeneralUserRegistration;
