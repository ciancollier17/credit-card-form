import React from 'react';
import CreditCardLogo from './CreditCardLogo';

function CreditCard () {
  return (
    <div id="credit-card">
      <div>
        <div className="top-section">
          <img className="chip" src="chip.png" style={{float: 'left', height: '1.2rem', paddingLeft: '0.5rem', marginTop: '1.5rem'}} />
        </div>
        <CreditCardLogo />
      </div>
      <div>
        <h3>0123 4567 8954 2343</h3>
      </div>
      <div>
        <div className="expiry">
          <h4>Expires</h4>
          <h4>03/11/2019</h4>
        </div>
        <div className="expiry">
          <h4>Valid From</h4>
          <h4>03/11/2015</h4>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
