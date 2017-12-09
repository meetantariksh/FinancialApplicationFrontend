/**
*
* ContactUs
*
*/

import React from 'react';
// import styled from 'styled-components';


class ContactUs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id="gtco-subscribe">
          <div className="gtco-container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                <h2>Let Us Contact You</h2>
                <p>Send us you details and we shall be more than happy to contact you.</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="col-md-12">
                <form className="form-inline">
                  <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <button type="submit" className="btn btn-default btn-block">Contact Me</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer id="gtco-footer" role="contentinfo">
          <div className="gtco-container">
            <div className="row row-p	b-md">

              <div className="col-md-4">
                <div className="gtco-widget">
                  <h3>About Us</h3>
                  <p>We are a Financial firm dedicated to ensure the growth of your assets.</p>
                </div>
              </div>

              <div className="col-md-4 col-md-push-1">
                <div className="gtco-widget">
                  <h3>Links</h3>
                  <ul className="gtco-footer-links">
                    <li><a href="#">Terms of services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="gtco-widget">
                  <h3>Get In Touch</h3>
                  <ul className="gtco-quick-contact">
                    <li><i className="icon-phone"></i> +91 980 400 6296</li>
                    <li><i className="icon-phone"></i> +91 896 145 2831</li>
                    <li><i className="icon-mail2"></i> maass.retail@gmail.com</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="row copyright">
              <div className="col-md-12">
                <p className="pull-left">
                  <small className="block">&copy; MAASS Enterprices.</small>
                </p>
                <div className="pull-right">
                  <ul className="gtco-social-icons pull-right">
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>
    );
  }
}

ContactUs.propTypes = {

};

export default ContactUs;
