import React from 'react';
import isEmpty from 'lodash/isEmpty';

import Banner from './Banner/Loadable';
import Services from './Services/Loadable';
import Products from './Products/Loadable';
import NewsHeadLines from './NewsHeadLines/Loadable';
import ContactUs from './ContactUs/Loadable';
import OurStats from './OurStats/Loadable';

class LandingPageMainComponent extends React.PureComponent { 
    render() {
        return (
            <div id="page">
                <Banner 
                    authenticationLock = {this.props.authenticationLock}
                    dispatchRegistration = {this.props.dispatchRegistration}
                />
                <Services/>
                <Products/>
                {
                    this.props.showNewsComponent && !isEmpty((this.props.newsData).articles) &&
                    <NewsHeadLines
                        newsData= {(this.props.newsData).articles}
                    />
                }
                <OurStats/>
                <ContactUs/>
            </div>
        );
    }
}

LandingPageMainComponent.propTypes = {
    showNewsComponent: React.PropTypes.bool.isRequired,
    newsData: React.PropTypes.object.isRequired,
    authenticationLock: React.PropTypes.object.isRequired,
    dispatchRegistration: React.PropTypes.func.isRequired
};
    
export default LandingPageMainComponent;