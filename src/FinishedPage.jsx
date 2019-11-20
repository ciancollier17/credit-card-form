import React from 'react';
import {Link} from 'react-router-dom';

const getErrorOrSucessPage = (error_or_success) => {
  if (error_or_success == "error") {
    return (
      <React.Fragment>
      <span id="endpage-graphic" className="error">X</span>
      <p id="endpage-text">Payment Error!</p>
      <p id="endpage-text-small">Please <Link to="/">try again.</Link></p>
      </React.Fragment>
    );
  } else if (error_or_success == "success") {
    return (
      <React.Fragment>
      <span id="endpage-graphic" className="success">&#x2713;</span>
      <p id="endpage-text">Payment Successful!</p>
      <p id="endpage-text-small">You may now close this window</p>
      </React.Fragment>
    );
  }
}

function FinishedPage (props) {
  return (
    <div id="content">
      <div className="row">
        <div id="form-container" className="col-lg-4" style={{width: "100%", display: "block"}}>
          {getErrorOrSucessPage(props.match.params.errororsuccess)}
        </div>
      </div>
    </div>
  );
}

export default FinishedPage;
