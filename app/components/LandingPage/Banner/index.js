/**
*
* Banner
*
*/

import React from 'react';
// import styled from 'styled-components';

const backGroundImage = require('../../../images/LandingPage/img_bg_1.jpg');

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
                  <li><a href="http://twitter.com/gettemplatesco"><i className="ti-twitter-alt"></i> </a></li>
                  <li><a href="#"><i className="icon-mail2"></i></a></li>
                  <li><a href="#"><i className="ti-facebook"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div id="gtco-logo"><a href="index.html">Aesthetic <em>.</em></a></div>
              </div>
              <div className="col-xs-8 text-right menu-1">
                <ul>
                  <li className="active"><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li className="has-dropdown">
                    <a href="services.html">Services</a>
                    <ul className="dropdown">
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">eCommerce</a></li>
                      <li><a href="#">Branding</a></li>
                      <li><a href="#">API</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Dropdown</a>
                    <ul className="dropdown">
                      <li><a href="#">HTML5</a></li>
                      <li><a href="#">CSS3</a></li>
                      <li><a href="#">Sass</a></li>
                      <li><a href="#">jQuery</a></li>
                    </ul>
                  </li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>

        <header id="gtco-header" className="gtco-cover" role="banner" style={{backGroundImage: backGroundImage}}>
          <div className="overlay"></div>
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">
                <div className="display-t">
                  <div className="display-tc">
                    <h1 className="animate-box" data-animate-effect="fadeInUp">Your Business To The Next Level</h1>
                    <h2 className="animate-box" data-animate-effect="fadeInUp">Free HTML5 Bootstrap Templates Made <em>by</em> <a href="http://gettemplates.co/" target="_blank">GetTemplates.co</a></h2>
                    <p className="animate-box" data-animate-effect="fadeInUp"><a href="#" className="btn btn-white btn-lg btn-outline">Get In Touch</a></p>
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
