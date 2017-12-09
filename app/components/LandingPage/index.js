import React from 'react';

import Banner from './Banner/Loadable';

class LandingPageMainComponent extends React.PureComponent { 
    render() {
        return (
            <div id="page">
                <Banner/>
            </div>
        );
    }
}

LandingPageMainComponent.propTypes = {
    
};
    
export default LandingPageMainComponent;