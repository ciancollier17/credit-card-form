import React from 'react';
import LoadingPageGraphic from './components/LoadingPageGraphic';

function LoadingPage () {
  return (
    <div id="content">
      <div className="row">
        <div id="form-container" className="col-lg-4" style={{width: "100%", display: "block"}}>
          <p id="loading-page-text">Processing Your Payment</p>
          <LoadingPageGraphic />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
