/**
*
* OurStats
*
*/

import React from 'react';
// import styled from 'styled-components';


class OurStats extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id="gtco-counter" className="gtco-section">
          <div className="gtco-container">

            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>Our Awesome Statistics</h2>
                <p>Without continual growth and progress, such words as improvement, achievement, and success have no meaning.</p>
              </div>
            </div>

            <div className="row">
              
              <div className="col-md-12 col-sm-6 animate-box" data-animate-effect="fadeInLeft"  style={{textAlign: 'center'}}>
                <div className="feature-center">
                  <span className="icon">
                    <i className="ti-face-smile"></i>
                  </span>
                  <span className="counter js-counter" data-from="0" data-to="128" data-speed="2000" data-refresh-interval="50">1</span>
                  <span className="counter-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
    );
  }
}

OurStats.propTypes = {

};

export default OurStats;
