/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Auth from '../../components/Common/AuthenticationService';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLandingPage, {
  makeSelectLoadingNews,
  makeSelectLoadingNewsComplete,
  makeSelectLoadingNewsError,
  makeSelectNewsData
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  loadNews,
  resetLoadNews
} from './actions';

import LandingPageMainComponent from '../../components/LandingPage/Loadable';

import '../../styles/LandingPage/style.css';
import '../../styles/LandingPage/animate.css';
import '../../styles/LandingPage/icomoon.css';
import '../../styles/LandingPage/themify-icons.css';
import '../../styles/LandingPage/bootstrap.css';
import '../../styles/LandingPage/magnific-popup.css';
import '../../styles/LandingPage/owl.carousel.min.css';
import '../../styles/LandingPage/owl.theme.default.min.css';

export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      showNewsComponent: false,
      renderAll: false,
      newsData: {}
    };
    this.dispatchRegistration = this.dispatchRegistration.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(loadNews());
  }

  componentDidUpdate(){
    if(!this.props.loadingNews && this.props.loadingNewsComplete){
      try{
        let data = JSON.parse(this.props.newsData);
        if(data){
          this.setState({
            showNewsComponent: true,
            renderAll: true,
            newsData: data
          });
        }else{
          this.setState({
            showNewsComponent: false,
            renderAll: true
          });
        }
      }catch (error){
        console.log(error);
        this.setState({
          showNewsComponent: false,
          renderAll: true
        });
      }
      this.props.dispatch(resetLoadNews());
    }else if(this.props.loadingNewsError){
      this.setState({
        showNewsComponent: false,
        renderAll: true
      });
      this.props.dispatch(resetLoadNews());
    }
  }

  dispatchRegistration(){
    window.location.href = "/registration";
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Periscope Capitals</title>
          <meta name="description" content="This is the landing page for MAASS Financial Application" />
        </Helmet>
        <div className="gtco-loader"></div>
        {
          this.state.renderAll &&
          <div>
            <LandingPageMainComponent
              showNewsComponent = {this.state.showNewsComponent}
              newsData = {this.state.newsData}
              authenticationLock={new Auth()}
              dispatchRegistration={this.dispatchRegistration}
            />
          </div>
        }
      </div>
    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingpage: makeSelectLandingPage(),
  loadingNews: makeSelectLoadingNews(),
  loadingNewsComplete: makeSelectLoadingNewsComplete(),
  loadingNewsError: makeSelectLoadingNewsError(),
  newsData: makeSelectNewsData()
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
