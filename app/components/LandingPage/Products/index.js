/**
*
* Products
*
*/

import React from 'react';
import runjQueryMagnificPopup from '../../../externalJS/LandingPage/jquery.magnific-popup.min';
import runMagnificPopup from '../../../externalJS/LandingPage/magnific-popup-options';
import runOwlCarousel from '../../../externalJS/LandingPage/owl.carousel.min';
import runMain from '../../../externalJS/LandingPage/main'; 

const productImages = {
  itemOne: require('../../../images/LandingPage/dsp.jpg'),
  itemThree: require('../../../images/LandingPage/icici.png'),
  itemFive: require('../../../images/LandingPage/kotak.jpg')
}


class Products extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    runjQueryMagnificPopup();
    runMagnificPopup();
    runOwlCarousel();
    runMain();
  }

  render() {
    return (
      <div>
        <div id="gtco-products">
          <div className="gtco-container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>Products</h2>
                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
              </div>
            </div>
            <div className="row animate-box">
              <div className="owl-carousel owl-carousel-carousel">
                <div className="item">
                  <img src={productImages.itemOne} />
                </div>
                <div className="item">
                  <img src={productImages.itemThree} />
                </div>
                <div className="item">
                  <img src={productImages.itemFive} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Products.propTypes = {

};

export default Products;
