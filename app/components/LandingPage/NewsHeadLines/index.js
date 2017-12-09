/**
*
* NewsHeadLines
*
*/

import React from 'react';
// import styled from 'styled-components';


class NewsHeadLines extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id="gtco-portfolio" className="gtco-section">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2>News</h2>
                <p>It's amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.</p>
              </div>
            </div>

            <div className="row row-pb-md">
              <div className="col-md-12">
                <ul id="gtco-portfolio-list">
                  {
                    this.props.newsData.map(
                      function(news, index){
                        if(index <= 8){
                          return (
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${news.urlToImage})`}}>
                              <a target='_blank' href={news.url} className="color-1">
                                <div className="case-studies-summary">
                                  <span>{news.source.name}</span>
                                  <h2>{news.title}</h2>
                                </div>
                              </a>
                            </li>
                          )
                        }
                      }
                    )
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

NewsHeadLines.propTypes = {
  newsData: React.PropTypes.array.isRequired,
};

export default NewsHeadLines;
