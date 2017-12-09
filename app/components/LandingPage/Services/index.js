/**
*
* Services
*
*/

import React from 'react';
// import styled from 'styled-components';


class Services extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id="gtco-features-3">
          <div className="gtco-container">
            <div className="gtco-flex">
              <div className="feature feature-1 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-inner">
                  <span className="icon">
                    <i className="ti-announcement"></i>
                  </span>
                  <h3>Life Insurance</h3>
                  <p>Life Insurance provides financial cover should the unthinkable happen, enabling people to be secure in the knowledge that their dependents could recieve a cash lump sum if they were to die.</p>
                  <p><a href="#" className="btn btn-white btn-outline">Learn More</a></p>
                </div>
              </div>
              <div className="feature feature-2 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-inner">
                  <span className="icon">
                    <i className="ti-announcement"></i>
                  </span>
                  <h3>Mutual Funds</h3>
                  <p>Mutual funds have historically offered safety and diversification. And they spare you the responsibility of picking individual stocks.</p>
                  <p><a href="#" className="btn btn-white btn-outline">Learn More</a></p>
                </div>
              </div>
              <div className="feature feature-3 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-inner">
                  <span className="icon">
                    <i className="ti-announcement"></i>
                  </span>
                  <h3>General Insurance</h3>
                  <p>Having insurance doesn't guarantee good health outcomes, but it is a critical factor.</p>
                  <p><a href="#" className="btn btn-white btn-outline">Learn More</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="gtco-features">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>Services We Offer</h2>
                <p>The best way to find yourself is to lose yourself in the service of others.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="feature-center animate-box" data-animate-effect="fadeIn">
                  <span className="icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <h3>Mutual Funds</h3>
                  <p>Mutual funds have historically offered safety and diversification. And they spare you the responsibility of picking individual stocks. </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-center animate-box" data-animate-effect="fadeIn">
                  <span className="icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <h3>Life Insurance</h3>
                  <p>Life Insurance provides financial cover should the unthinkable happen, enabling people to be secure in the knowledge that their dependents could recieve a cash lump sum if they were to die.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-center animate-box" data-animate-effect="fadeIn">
                  <span className="icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <h3>General Insurance</h3>
                  <p>Having insurance doesn't guarantee good health outcomes, but it is a critical factor. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Services.propTypes = {

};

export default Services;
