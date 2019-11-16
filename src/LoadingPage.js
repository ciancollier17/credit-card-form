import React from 'react';

function LoadingPage () {
  return (
    <div id="content">
      <div className="row">
        <div id="form-container" className="col-lg-4" style={{width: "100%"}}>
          <p id="loading-page-text">Processing Your Payment</p>
          <div id="loading-page-graphic">
            <div className="loading-page-graphic-circle"></div>
            <div className="loading-page-graphic-circle"></div>
            <div className="loading-page-graphic-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
