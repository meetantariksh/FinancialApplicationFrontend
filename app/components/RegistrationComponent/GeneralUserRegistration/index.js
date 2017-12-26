/**
*
* GeneralUserRegistration
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

class GeneralUserRegistration extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      stepNumber: 1,
      stepDescription: 'Please enter your email address.',
      submitButtonText: 'Continue',
      email: '',
      confirmEmail: '',
      emailError: false,
      emailErrorText: '',
    };
    this.closeComponent = this.closeComponent.bind(this);
    this.submitFormStepOne = this.submitFormStepOne.bind(this);
    this.submitFormStepTwo = this.submitFormStepTwo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeConfirmEmail = this.onChangeConfirmEmail.bind(this);
  }

  componentDidMount(){
    this.props.triggerOpenAnimation();
  }

  componentDidUpdate(){
    if(!this.props.registrationData.checkEmail && this.props.registrationData.checkEmailComplte){
      if(this.props.registrationData.isUserRegistered){
        this.setState({
          stepNumber: 2,
          stepDescription: 'Please confirm your details. Incase of any mismatch or incorrect data please contact us.',
          submitButtonText: 'Continue',
        });
      }else{
        this.setState({
          stepNumber: 2,
          stepDescription: 'Please provide your account details.',
          submitButtonText: 'Continue',
        });
      }
      this.props.resetCheckEmail();
    }else if(this.props.registrationData.checkEmailError){

    }
  }

  closeComponent(){
    this.props.triggerCloseAnimation();
    setTimeout(this.props.closeForm, 800);
  }

  submitFormStepOne(evt){
    evt.preventDefault();
    
    if((this.state.email).match(mailFormat)){
      if(this.state.email === this.state.confirmEmail){
        this.setState({
          emailError: false,
          emailErrorText: '',
          submitButtonText: 'Please Wait...',
        });
        this.props.initiateCheckEmail(this.state.email);
      }else{
        this.setState({
          emailError: true,
          emailErrorText: 'Email and Confirm Email Field Do mot Match'
        });
      }
    }else{
      this.setState({
        emailError: true,
        emailErrorText: 'Please enter a valid email'
      });
    }

    return false;
  }

  submitFormStepTwo(evt){
    evt.preventDefault();
    return false;
  }

  onChangeEmail(event){
    this.setState({
      email: event.target.value,
    });
  }

  onChangeConfirmEmail(event){
    this.setState({
      confirmEmail: event.target.value,
    });
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
                      <input type="email" id="userEmail" name="userEmail" onChange={this.onChangeEmail} />
                    </div>
                    
                    <div className="half-width">
                      <label htmlFor="userEmail">Confirm Email</label>
                      <input type="email" id="userEmail" name="userEmail" onChange={this.onChangeConfirmEmail}/>
                    </div>
                    
                  </fieldset>

                  {
                    this.state.emailError && 
                    <p>{this.state.emailErrorText}</p>
                  }

                  <fieldset>
                    <div>
                      <input type="submit" value={this.state.submitButtonText} />
                    </div>
                  </fieldset>
                </form>

              }

              {
                this.state.stepNumber == 2 && this.props.registrationData.isUserRegistered &&
                <form onSubmit={this.submitFormStepTwo}>
                  <fieldset>
                    <legend>Account Information</legend>
                    
                    <div className="half-width">
                      <label htmlFor="userName">First Name</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.firstName} disabled={true} />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Last Name</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.lastName} disabled={true} />
                    </div>

                    <div className="full-width">
                      <label htmlFor="userName">Address</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.address} disabled={true} />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Primary Phone</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.primaryPhone} disabled={true} />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Anternate Phone</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.alternatePhone} disabled={true} />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Date Of Birth</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.dateOfBirth} disabled={true} />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Registration ID</label>
                      <input type="text"  name="userName" value={this.props.registrationData.profileData.registrationId} disabled={true} />
                    </div>
                    
                  </fieldset>

                  <fieldset>
                  <legend>Sign In Information</legend>

                  <div className="half-width">
                    <label htmlFor="userName">Username</label>
                    <input type="text"  name="userName" />
                  </div>

                  <div className="half-width">
                    <label htmlFor="userEmail">Email</label>
                    <input type="email" id="userEmail" name="userEmail" value={this.state.email} disabled={true}/>
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
                    <div>
                      <input type="submit" value={this.state.submitButtonText} />
                    </div>
                  </fieldset>
                </form>

              }

              {
                this.state.stepNumber == 2 && !this.props.registrationData.isUserRegistered &&
                <form onSubmit={this.submitFormStepTwo}>
                  <fieldset>
                    <legend>Account Information</legend>
                    
                    <div className="half-width">
                      <label htmlFor="userName">First Name</label>
                      <input type="text"  name="userName"/>
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Last Name</label>
                      <input type="text"  name="userName" />
                    </div>

                    <div className="full-width">
                      <label htmlFor="userName">Address</label>
                      <input type="text"  name="userName" />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Primary Phone</label>
                      <input type="text"  name="userName" />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Anternate Phone</label>
                      <input type="text"  name="userName" />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Date Of Birth</label>
                      <input type="text"  name="userName"  />
                    </div>

                    <div className="half-width">
                      <label htmlFor="userName">Registration ID</label>
                      <input type="text"  name="userName" />
                    </div>
                    
                  </fieldset>

                  <fieldset>
                  <legend>Sign In Information</legend>

                  <div className="half-width">
                    <label htmlFor="userName">Username</label>
                    <input type="text"  name="userName" />
                  </div>

                  <div className="half-width">
                    <label htmlFor="userEmail">Email</label>
                    <input type="email" id="userEmail" name="userEmail" value={this.state.email} disabled={true}/>
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
  closeForm: PropTypes.func.isRequired,
  initiateCheckEmail: PropTypes.func.isRequired,
  resetCheckEmail: PropTypes.func.isRequired,
};

export default GeneralUserRegistration;
