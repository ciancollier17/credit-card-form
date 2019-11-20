import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import LoadingPageGraphic from './components/LoadingPageGraphic';
import axios from 'axios';

function LoadingPage (props) {
  const {cardholderName, CVC, creditCardNumber, expiryDate} = useSelector(full_state => full_state);

  useEffect(() => {
    // Send data to back end
    axios.post('https://jsonplaceholder.typicode.com/users', {
      cardholderName,
      creditCardNumber,
      expiryDate,
      CVC
    }).then((res) => {
      props.history.push('/finished/success');
    }).catch((err) => {
      props.history.push('/finished/error');
    });
  }, []);

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
