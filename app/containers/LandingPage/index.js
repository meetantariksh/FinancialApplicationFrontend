/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Banner from '../../components/LandingPage/Banner/Loadable';

import '../../styles/LandingPage/style.css';
import '../../styles/LandingPage/animate.css';
import '../../styles/LandingPage/icomoon.css';
import '../../styles/LandingPage/themify-icons.css';
import '../../styles/LandingPage/bootstrap.css';
import '../../styles/LandingPage/magnific-popup.css';
import '../../styles/LandingPage/owl.carousel.min.css';
import '../../styles/LandingPage/owl.theme.default.min.css';

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){

  }

  render() {
    return (
      <div>
        <Helmet>
          <title>MAASS Financials</title>
          <meta name="description" content="This is the landing page for MAASS Financial Application" />
        </Helmet>
        { /* <div className="gtco-loader"></div> */ }
        <div id="page">
          <Banner/>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingpage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'landingPage', reducer });
const withSaga = injectSaga({ key: 'landingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LandingPage);
