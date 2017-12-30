/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import '../../styles/Error404Styles/base.css';
import '../../styles/Error404Styles/main.css';
import '../../styles/Error404Styles/vendor.css';

import runMain from '../../externalJS/Error404/main';
import runPlugin from '../../externalJS/Error404/plugins';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    runPlugin();
  }
  componentDidMount(){
    runMain();
  }

  render() {
    return (
     <div>
        <header className="main-header">
          <a className="menu-toggle" href="#"><span>Menu</span></a>	
        </header> 
        <nav id="menu-nav-wrap">

          <h5>Site Pages</h5>   	
          <ul className="nav-list">
            <li><a href="#" title="">Home</a></li>
            <li><a href="#" title="">About</a></li>
            <li><a href="#" title="">Portfolio</a></li>
            <li><a href="#" title="">Blog</a></li>
            <li><a href="#" title="">FAQ</a></li>					
            <li><a href="#" title="">Contact</a></li>					
          </ul>

          <h5>You seem to be lost. Let us guide you back.</h5>  
          <p>The page you are searching for was not found. It might be because the page has been temporarily brought down or removed. <br/>
          </p>

        </nav>

        <main id="main-404-content" className="main-content-particle-js">

          <div className="content-wrap">

            <div className="shadow-overlay"></div>

            <div className="main-content">
              <div className="row">
                <div className="col-twelve">
                  
                    <h1 className="kern-this">404 Error</h1>
                    <p>
                  The page you are searching for was not found. It might be because the page has been temporarily brought down or removed. <br/>
                  <a href="/">Click Here</a> to navigate back to the home page or you may also select the link you want from the side menu.
                    </p>
                </div>    			
              </div> 	
            </div> 
          </div> 
        
        </main> 

        <div id="preloader"> 
            <div id="loader"></div>
        </div> 
     </div>
    );
  }
}
