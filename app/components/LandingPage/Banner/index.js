/**
*
* Banner
*
*/

import React from 'react';
// import styled from 'styled-components';

class Banner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <nav className="gtco-nav" role="navigation">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 text-right gtco-contact">
                <ul className="">
                  <li><a href="#"><i className="ti-mobile"></i> +1 (0)123 456 7890 </a></li>
                  <li><a href="#"><i className="ti-twitter-alt"></i> </a></li>
                  <li><a href="#"><i className="icon-mail2"></i></a></li>
                  <li><a href="#"><i className="ti-facebook"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div id="gtco-logo"><a href="index.html">MAASS</a></div>
              </div>
              <div className="col-xs-8 text-right menu-1">
                <ul>
                  <li className="active"><a href="index.html">Home</a></li>
                  <li className="has-dropdown">
                    <a href="#">Services</a>
                    <ul className="dropdown">
                      <li><a href="#">Mutual Funds</a></li>
                      <li><a href="#">Life Insurance</a></li>
                      <li><a href="#">General Insurance</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Global News</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>

        <header id="gtco-header" className="gtco-cover" role="banner">
          <div className="overlay"></div>
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">
                <div className="display-t">
                  <div className="display-tc">
                    <h1 className="animate-box" data-animate-effect="fadeInUp">MAASS Finance</h1>
                    <h2 className="animate-box" data-animate-effect="fadeInUp">Let's Tell Your Money What To Do, Before It Leaves...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Banner.propTypes = {

};

export default Banner;
